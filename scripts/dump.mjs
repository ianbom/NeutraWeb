import { chromium } from 'playwright';
import fs from 'node:fs';
const base = process.argv[2] || 'https://neutra.framer.website/';
const outDir = process.argv[3] || 'ref/dump';
fs.mkdirSync(outDir, { recursive: true });
const fn = async (page) => {
  const R = process.env.__R ? [process.env.__R] : null;
  const routes = ['', 'about', 'cases', 'article', 'contact', 'legal/privacy-policy', 'legal/licensing', 'legal/terms-of-use', 'article/crafting-exceptional-user-experiences'];
  const out = {};
  for (const [w,h] of [[1440,900],[810,1000],[390,844]]) {
    await page.setViewportSize({width:w,height:h});
    for (const r of routes) {
      await page.goto(base+r);
      await page.waitForTimeout(1200);
      await page.evaluate(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=300){window.scrollTo({top:y,behavior:'instant'});await new Promise(r=>setTimeout(r,60));} window.scrollTo({top:0,behavior:'instant'}); await new Promise(r=>setTimeout(r,1500));});
      const tree = await page.evaluate(() => {
        const main = document.querySelector('#main') || document.body;
        const lines = [];
        const walk = (el, d) => {
          const cs = getComputedStyle(el);
          if (cs.display === 'none' || cs.visibility==='hidden') return;
          const rc = el.getBoundingClientRect();
          if (rc.width === 0 && rc.height === 0 && el.children.length===0) return;
          const name = el.dataset.framerName || '';
          const props = [];
          const add=(k,v,def)=>{ if(v && v!==def) props.push(k+'='+v); };
          add('bg', cs.backgroundColor, 'rgba(0, 0, 0, 0)');
          add('bgi', cs.backgroundImage.slice(0,140), 'none');
          add('rad', cs.borderRadius, '0px');
          if (cs.borderTopWidth!=='0px' || cs.borderBottomWidth!=='0px') add('bd', cs.borderTopWidth+' '+cs.borderBottomWidth+' '+cs.borderTopColor+' '+cs.borderStyle,'');
          const bs = el.style.getPropertyValue('--border-color'); if (bs) add('bdc', bs+' w'+el.style.getPropertyValue('--border-top-width'), '');
          add('sh', cs.boxShadow, 'none');
          add('pad', cs.padding, '0px');
          if (cs.display==='flex') props.push('flex '+cs.flexDirection+' gap '+cs.gap+' ai '+cs.alignItems+' jc '+cs.justifyContent);
          if (cs.display==='grid') props.push('grid '+cs.gridTemplateColumns+' gap '+cs.gap);
          add('pos', cs.position, 'relative'); add('pos', cs.position==='static'?'':'' ,'');
          add('of', cs.overflow, 'visible');
          add('op', cs.opacity, '1');
          add('flt', cs.filter, 'none'); add('bf', cs.backdropFilter, 'none');
          add('z', cs.zIndex, 'auto');
          const tag = el.tagName.toLowerCase();
          let txt = '';
          if (['h1','h2','h3','h4','h5','h6','p'].includes(tag) || (el.children.length===0 && el.textContent.trim())) {
            txt = ' "' + el.textContent.trim().slice(0,200) + '" ' + cs.fontFamily.split(',')[0] + ' ' + cs.fontSize + '/' + cs.lineHeight + ' w' + cs.fontWeight + ' ls' + cs.letterSpacing + ' ' + cs.color + ' ' + cs.textAlign;
          }
          if (tag==='img') txt = ' IMG ' + (el.currentSrc||el.src).split('?')[0].split('/').pop() + ' fit ' + cs.objectFit + ' ' + cs.objectPosition + ' alt="' + el.alt + '"';
          if (tag==='a') txt += ' href=' + el.getAttribute('href') + (el.target?' target='+el.target:'');
          if (tag==='svg') { lines.push('  '.repeat(d)+'svg '+Math.round(rc.x)+','+Math.round(rc.y+scrollY)+' '+Math.round(rc.width)+'x'+Math.round(rc.height)+' '+el.outerHTML.slice(0,400).replace(/\s+/g,' ')); return; }
          if (['input','select','textarea','button','label'].includes(tag)) txt += ' FORM ' + tag + ' name=' + (el.name||'') + ' ph=' + (el.placeholder||'') + ' type=' + (el.type||'') + (tag==='select'? ' opts='+[...el.options].map(o=>o.text).join('|'):'') + ' font ' + cs.fontSize + ' ' + cs.color;
          lines.push('  '.repeat(d) + tag + (name?'['+name+']':'') + ' ' + Math.round(rc.x)+','+Math.round(rc.y+scrollY)+' '+Math.round(rc.width)+'x'+Math.round(rc.height) + ' ' + props.join(' ') + txt);
          for (const c of el.children) walk(c, d+1);
        };
        walk(main, 0);
        return lines.join('\n');
      });
      out[(r||'home').replace(/\//g,'_')+'-'+w] = tree;
    }
  }
  return out;
};
const browser = await chromium.launch();
const page = await browser.newPage();
const out = await fn(page);
for (const [k,v] of Object.entries(out)) fs.writeFileSync(`${outDir}/${k}.txt`, v);
await browser.close();
console.log(Object.keys(out).length, 'dumps');
