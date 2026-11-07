"use client";

import { useEffect, useRef } from "react";

const vertex = `attribute vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

const fragment = `precision mediump float;
uniform vec2 resolution;
uniform float time;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1., 0.)), f.x),
             mix(hash(i + vec2(0., 1.)), hash(i + vec2(1., 1.)), f.x), f.y);
}
float fbm(vec2 p) {
  float value = 0.0, amplitude = 0.5;
  for (int i = 0; i < 4; i++) { value += amplitude * noise(p); p = p * 2.02 + 7.3; amplitude *= 0.5; }
  return value;
}
void main() {
  vec2 uv = gl_FragCoord.xy / resolution;
  float t = time * 0.055;
  vec2 p = vec2(uv.x * 2.8, uv.y * 2.0);
  float cloud = fbm(p * 2.5 + vec2(t, -t * 0.4));
  float wave = uv.y + 0.14 * sin(uv.x * 6.0 + t * 2.0) + (cloud - 0.5) * 0.38;
  vec3 color = mix(vec3(0.005, 0.018, 0.09), vec3(0.025, 0.22, 0.75), smoothstep(0.12, 0.56, wave));
  color = mix(color, vec3(0.0, 0.72, 0.92), smoothstep(0.42, 0.68, wave) * 0.8);
  color = mix(color, vec3(0.16, 0.25, 0.42), smoothstep(0.72, 1.08, wave) * 0.7);
  float orange = smoothstep(0.08, 0.9, uv.x) * (1.0 - smoothstep(0.0, 0.48, abs(uv.y - 0.5))) * 0.48;
  color = mix(color, vec3(1.0, 0.28, 0.01), orange);
  color *= mix(0.52, 1.0, smoothstep(0.1, 0.7, uv.x));
  color += (hash(gl_FragCoord.xy + floor(time * 2.0)) - 0.5) * 0.025;
  gl_FragColor = vec4(color, 1.0);
}`;

export function HeroWaves() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) return;

    const shaders: WebGLShader[] = [];
    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      shaders.push(shader);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
    };
    const vs = compile(gl.VERTEX_SHADER, vertex);
    const fs = compile(gl.FRAGMENT_SHADER, fragment);
    const program = vs && fs ? gl.createProgram() : null;
    const buffer = program ? gl.createBuffer() : null;
    if (program && vs && fs && buffer) {
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
    }
    if (!program || !buffer || !gl.getProgramParameter(program, gl.LINK_STATUS)) {
      if (buffer) gl.deleteBuffer(buffer);
      if (program) gl.deleteProgram(program);
      shaders.forEach((shader) => gl.deleteShader(shader));
      return;
    }

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    const resolution = gl.getUniformLocation(program, "resolution");
    const time = gl.getUniformLocation(program, "time");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = false;
    let lost = false;
    let elapsed = 0;
    let previous = 0;

    const draw = (now: number) => {
      frame = 0;
      if (lost || !visible || document.hidden) return;
      if (previous) elapsed += Math.min(now - previous, 100);
      previous = now;
      gl.uniform2f(resolution, canvas.width, canvas.height);
      gl.uniform1f(time, elapsed / 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      canvas.style.opacity = "1";
      if (!reduced.matches) frame = requestAnimationFrame(draw);
    };
    const update = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
      if (!lost && visible && !document.hidden) frame = requestAnimationFrame(draw);
    };
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const scale = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.round(rect.width * scale));
      canvas.height = Math.max(1, Math.round(rect.height * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
      update();
    };
    const onLost = () => { lost = true; canvas.style.opacity = "0"; update(); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    const resizer = new ResizeObserver(resize);
    observer.observe(canvas);
    resizer.observe(canvas);
    reduced.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    canvas.addEventListener("webglcontextlost", onLost);
    resize();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizer.disconnect();
      reduced.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      canvas.removeEventListener("webglcontextlost", onLost);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      shaders.forEach((shader) => gl.deleteShader(shader));
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full rounded-[32px] opacity-0" />;
}
