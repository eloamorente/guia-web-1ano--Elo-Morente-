const fs = require('fs');
const path = require('path');

function hexToRgb(hex) {
  hex = hex.replace('#','');
  if (hex.length === 3) hex = hex.split('').map(h=>h+h).join('');
  const r = parseInt(hex.substr(0,2),16);
  const g = parseInt(hex.substr(2,2),16);
  const b = parseInt(hex.substr(4,2),16);
  return [r,g,b];
}

function srgbChannelToLinear(c){
  c = c / 255;
  return c <= 0.04045 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4);
}

function luminance(rgb){
  const r = srgbChannelToLinear(rgb[0]);
  const g = srgbChannelToLinear(rgb[1]);
  const b = srgbChannelToLinear(rgb[2]);
  return 0.2126*r + 0.7152*g + 0.0722*b;
}

function contrast(hex1, hex2){
  const L1 = luminance(hexToRgb(hex1));
  const L2 = luminance(hexToRgb(hex2));
  const a = Math.max(L1, L2);
  const b = Math.min(L1, L2);
  return (a + 0.05) / (b + 0.05);
}

const cssPath = path.join(__dirname, '..', 'css', 'styles.css');
if (!fs.existsSync(cssPath)) {
  console.error('styles.css not found at', cssPath);
  process.exit(2);
}
const css = fs.readFileSync(cssPath, 'utf8');
// helper to parse var blocks
function parseVars(block) {
  const map = {};
  if (!block) return map;
  const varRegex = /--([a-z0-9-]+):\s*([^;]+);/gi;
  let mm;
  while ((mm = varRegex.exec(block)) !== null) {
    map[mm[1].trim()] = mm[2].trim();
  }
  return map;
}

// extract :root block
const rootMatch = css.match(/:root\s*\{([\s\S]*?)\}/);
const darkMatch = css.match(/\.dark\s*\{([\s\S]*?)\}/);
const varsRoot = parseVars(rootMatch ? rootMatch[1] : '');
const varsDark = parseVars(darkMatch ? darkMatch[1] : '');

function resolveColor(value){
  if (!value) return null;
  value = value.split(')')[0];
  if (value.indexOf('#') === 0) return value;
  const hexMatch = value.match(/#([0-9a-fA-F]{3,6})/);
  if (hexMatch) return hexMatch[0];
  const rgbMatch = value.match(/rgba?\(([^)]+)\)/);
  if (rgbMatch){
    const parts = rgbMatch[1].split(',').map(s=>s.trim());
    const r = parseInt(parts[0],10);
    const g = parseInt(parts[1],10);
    const b = parseInt(parts[2],10);
    function toHex(n){ return ('0'+n.toString(16)).slice(-2); }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  return null;
}

const colorMapRoot = {
  primary: resolveColor(varsRoot['color-primary']),
  secondary: resolveColor(varsRoot['color-secondary']),
  text: resolveColor(varsRoot['color-text']),
  bg: resolveColor(varsRoot['color-bg']),
  border: resolveColor(varsRoot['color-border'])
};

const colorMapDark = {
  primary: resolveColor(varsDark['color-primary'] || varsRoot['color-primary']),
  secondary: resolveColor(varsDark['color-secondary'] || varsRoot['color-secondary']),
  text: resolveColor(varsDark['color-text'] || varsRoot['color-text']),
  bg: resolveColor(varsDark['color-bg'] || varsRoot['color-bg']),
  border: resolveColor(varsDark['color-border'] || varsRoot['color-border'])
};

console.log('Extracted colors (root):', colorMapRoot);
console.log('Extracted colors (dark):', colorMapDark);

const checks = [
  {a: colorMapRoot.text, b: colorMapRoot.bg, name: 'Texto / Fundo (claro)'},
  {a: colorMapRoot.primary, b: '#ffffff', name: 'Primária / Branco (header - claro)'},
  {a: colorMapRoot.secondary, b: '#ffffff', name: 'Secundária / Branco (badges - claro)'},
  {a: colorMapRoot.text, b: colorMapRoot.secondary, name: 'Texto escuro / Secundária (badges - claro)'},
  {a: colorMapDark.text, b: colorMapDark.bg, name: 'Texto / Fundo (escuro)'},
  {a: colorMapDark.primary, b: '#ffffff', name: 'Primária / Branco (header - escuro)'},
  {a: colorMapDark.secondary, b: '#ffffff', name: 'Secundária / Branco (badges - escuro)'},
  {a: colorMapDark.text, b: colorMapDark.secondary, name: 'Texto / Secundária (badges - escuro)'}
];

checks.forEach(c => {
  if (!c.a || !c.b) { console.log(c.name + ': cor não encontrada, pulando'); return; }
  const ratio = contrast(c.a, c.b);
  console.log(`${c.name}: ${c.a} vs ${c.b} -> contraste = ${ratio.toFixed(2)} :1 ${ratio>=4.5? '✅ ok' : '❌ abaixo de 4.5'} `);
});

// extra: print suggestion if any fail
const failures = checks.filter(c => c.a && c.b && contrast(c.a,c.b) < 4.5);
if (failures.length){
  console.log('\nAlgumas combinações estão abaixo do padrão 4.5:1. Posso ajustar as variáveis de cor (por exemplo clarear o texto ou escurecer o fundo/elemento) se desejar.');
} else {
  console.log('\nTodas as combinações verificadas atendem 4.5:1.');
}
