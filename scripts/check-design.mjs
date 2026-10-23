import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
const base = new URL('../', import.meta.url);
const read = async path => readFile(new URL(path, base), 'utf8');
const exists = async path => { try { await access(new URL(path, base)); return true; } catch { return false; } };
const index = JSON.parse(await read('design-system/design-system.json'));
const tokens = JSON.parse(await read('design-system/tokens.json'));
assert.equal(index.v,3); assert.equal(index.layout,'files'); assert.ok(index.createdOnFiles.at); assert.equal(index.title,tokens.name);
assert.ok((await read('design-system/README.md')).includes('## Visual foundations'));
assert.ok((await read('design-system/components/Cover/preview.html')).startsWith('<!-- @dsCard height=320 -->'));
const names = new Set();
for (const family of ['color','spacing','radius','shadow']) for (const token of tokens[family].tokens) {
  assert.match(token.name,/^[A-Za-z0-9][A-Za-z0-9_.-]{0,63}$/); assert.ok(token.usage);
  assert.ok(!names.has(token.name),`Duplicate token ${token.name}`); names.add(token.name);
  assert.equal(typeof token.value,'string'); assert.ok(!/[;<>]/.test(token.value));
}
assert.equal(tokens.type.fonts.length,0); assert.equal(tokens.color.themes.length,1);
for (const group of tokens.type.groups) for (const style of group.styles) {
  assert.ok(tokens.type.families[group.family]); assert.ok(style.usage); assert.match(style.fontSize,/^\d+px$/);
}
const colors = Object.fromEntries(tokens.color.tokens.map(t=>[t.name,t.value]));
for (const color of Object.values(colors)) assert.match(color,/^#[a-f0-9]{6}$/);
const luminance = hex => {
  const values = [1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);
  return values[0]*.2126+values[1]*.7152+values[2]*.0722;
};
const pairings = [['ink','canvas'],['ink','paper'],['ink','mint'],['muted','canvas'],['muted','paper'],['muted','mint'],['brand','canvas'],['brand','paper'],['brand','mint'],['paper','brand'],['paper','deep'],['on-deep','deep'],['signal','canvas']];
const contrast = pairings.map(([foreground,background]) => {
  const light=[luminance(colors[foreground]),luminance(colors[background])].sort((a,b)=>a-b);
  const ratio=(light[1]+.05)/(light[0]+.05);assert.ok(ratio>=4.5,`${foreground}/${background}: ${ratio}`);
  return {foreground,background,ratio:Number(ratio.toFixed(2))};
});
const css = await read('public/assets/style.css');
assert.ok(!/#[a-f0-9]{3,8}\b/i.test(css),'Palette values belong in tokens.json');
assert.ok(css.includes('prefers-reduced-motion')); assert.ok(css.includes(':focus-visible'));
assert.ok(css.includes('inset-inline-end')); assert.ok(css.includes('[dir=rtl]'));
const used = [...css.matchAll(/var\(--([\w-]+)\)/g)].map(m=>m[1]);
const typeNames = Object.keys(tokens.type.families).map(x=>`font-${x}`);
for(const group of tokens.type.groups) for(const style of group.styles) for(const part of ['size','leading','weight','tracking']) typeNames.push(`${part}-${style.name}`);
for(const name of used) assert.ok(name==='height'||names.has(name)||typeNames.includes(name),`Missing token ${name}`);
let boards=0;
if(await exists('website-design/canvas.json')){
  const canvas=JSON.parse(await read('website-design/canvas.json'));
  assert.equal(canvas.v,3);assert.ok(canvas.createdOnFiles.at);assert.ok(canvas.title);
  assert.deepEqual(Object.keys(canvas.boards).sort(),[...canvas.order].sort());
  for(const [path,frame] of Object.entries(canvas.boards)){
    assert.match(path,/^[A-Za-z0-9_][\w.-]*\.dc\.html$/);assert.ok(frame.w>=40&&frame.w<=8000&&frame.h>=40&&frame.h<=8000);
    const html=await read('website-design/'+path);
    assert.ok(html.startsWith('<!doctype html>'));assert.ok(html.includes('<script src="./support.js"></script>'));
    assert.ok(html.includes('<x-dc>'));assert.ok(html.includes('class Component extends DCLogic'));
    assert.ok(html.includes('data-dc-script'));assert.equal(frame.expand,'fill');
    assert.ok(!/data:|<iframe|<object|<embed|innerHTML|appendChild/.test(html));
    const props=JSON.parse(html.match(/data-props='([^']+)'/)[1]);assert.equal(props.$preview.width,frame.w);assert.equal(props.$preview.height,frame.h);
    boards++;
  }
  assert.equal(canvas.designSystems[0].namespace,'offtranscribe');
  assert.deepEqual(JSON.parse(await read('website-design/ds/offtranscribe/tokens.json')),tokens,'Installed token snapshot differs');
  assert.equal(await read('website-design/ds/offtranscribe/README.md'),await read('design-system/README.md'));
}
console.log(JSON.stringify({localDesignChecksPassed:true,officialDesignChecksPerformed:false,assetImporterAvailable:false,boardsChecked:boards,colors:tokens.color.tokens.length,textStyles:tokens.type.groups.flatMap(g=>g.styles).length,contrast}));
