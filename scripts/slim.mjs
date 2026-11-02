import fs from 'node:fs';
const [,, file] = process.argv;
const lines = fs.readFileSync(file, 'utf8').split('\n');
const out = [];
let inMain = false;
for (let l of lines) {
  if (/footer\[/.test(l)) break;
  if (/section\[/.test(l)) inMain = true;
  if (!inMain) continue;
  if (/svg \d/.test(l) && !/<svg/.test(l)) continue;
  if (!/section\[|"|IMG|href=|FORM|grid|rad=|bg=/.test(l)) continue;
  l = l.replace(/ flex (row|column) gap normal ai normal jc flex-start/g, '').replace(/ pos=static/g, '').replace(/lsnormal /g, '').replace(/ Manrope/g, '').replace(/var\(--token-[a-z0-9-]+, (rgba?\([^)]+\))\)/g, '$1').replace(/<svg.*$/, '<svg>');
  out.push(l.slice(0, 220));
}
fs.writeFileSync(file.replace('.txt', '.slim'), out.join('\n'));
console.log(file, out.length);
