const fs = require('fs');
const path = require('path');

const base = '/Users/stupaul22/Documents/SANDBOX/nrvana/BACKUP/layerslider';
const outDir = path.join(__dirname, '..', 'src', 'data', 'sliders');
fs.mkdirSync(outDir, { recursive: true });

const sliderMap = {
  CITY: 'city',
  FARM: 'farm',
  FOREST: 'forest',
  SUMMER: 'summer',
  WINTER: 'winter',
};

for (const [name, slug] of Object.entries(sliderMap)) {
  const raw = JSON.parse(fs.readFileSync(path.join(base, name, 'settings.json'), 'utf8'));
  const layer = raw.layers[0];
  const bgUrl = layer.properties.background;
  const bgFile = bgUrl ? bgUrl.split('/').pop() : '';

  const sublayers = layer.sublayers.map((s, i) => {
    const t = JSON.parse(s.transition);
    let stylesObj = {};
    try { stylesObj = JSON.parse(s.styles || '{}'); } catch(e) {}

    const mediaUrl = s.media || '';
    const mediaFile = mediaUrl.includes('/') ? mediaUrl.split('/').pop() : '';
    const isText = s.type === 'h1' || s.type === 'h2' || s.type === 'h3' || s.type === 'h4' || s.type === 'p' || s.type === 'span';
    const hasImage = mediaFile && !mediaUrl.includes('text');

    return {
      id: i,
      type: s.type || 'img',
      text: (isText && s.subtitle && s.media === 'text') ? s.subtitle : '',
      image: hasImage ? `/images/sliders/${slug}/${mediaFile}` : (s.media !== 'text' ? `/images/sliders/${slug}/${mediaFile}` : ''),
      left: s.left || '0px',
      top: s.top || '0px',
      fontSize: stylesObj['font-size'] ? parseInt(stylesObj['font-size']) : undefined,
      fontFamily: stylesObj['font-family'] || undefined,
      color: stylesObj.color || undefined,
      // Animation in
      delayin: parseInt(t.delayin) || 0,
      durationin: parseInt(t.durationin) || 1000,
      fadein: t.fadein === true || t.fadein === 'true',
      rotatein: parseInt(t.rotatein) || 0,
      rotatexin: parseInt(t.rotatexin) || 0,
      rotateyin: parseInt(t.rotateyin) || 0,
      scalexin: parseFloat(t.scalexin) || 1,
      scaleyin: parseFloat(t.scaleyin) || 1,
      offsetxin: parseInt(t.offsetxin) || 0,
      offsetyin: parseInt(t.offsetyin) || 0,
      easingin: t.easingin || 'easeInOutQuint',
      // Show duration
      showuntil: parseInt(t.showuntil) || 0,
      // Animation out
      delayout: parseInt(t.delayout) || 0,
      durationout: parseInt(t.durationout) || 1000,
      fadeout: t.fadeout === true || t.fadeout === 'true',
      rotateout: parseInt(t.rotateout) || 0,
      rotatexout: parseInt(t.rotatexout) || 0,
      rotateyout: parseInt(t.rotateyout) || 0,
      scalexout: parseFloat(t.scalexout) || 1,
      scaleyout: parseFloat(t.scaleyout) || 1,
      offsetxout: parseInt(t.offsetxout) || 0,
      offsetyout: parseInt(t.offsetyout) || 0,
      easingout: t.easingout || 'easeInOutQuint',
    };
  });

  // Filter out sublayers with no content
  const filtered = sublayers.filter(s => s.text || s.image);

  const config = {
    slug,
    name,
    width: parseInt(raw.properties.width),
    height: parseInt(raw.properties.height),
    background: `/images/sliders/${slug}/${bgFile}`,
    slideDelay: parseInt(raw.properties.slidedelay) || 4000,
    fadeInDuration: parseInt(raw.properties.sliderfadeinduration) || 350,
    layers: filtered,
  };

  const tsContent = `import { SliderConfig } from "./types";\n\nexport const ${slug}Slider: SliderConfig = ${JSON.stringify(config, null, 2)};\n`;
  fs.writeFileSync(path.join(outDir, `${slug}.ts`), tsContent);
  console.log(`${name}: ${filtered.length} layers written to ${slug}.ts`);
}

// Write types file
const types = `export interface SliderLayer {
  id: number;
  type: string;
  text: string;
  image: string;
  left: string;
  top: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  delayin: number;
  durationin: number;
  fadein: boolean;
  rotatein: number;
  rotatexin: number;
  rotateyin: number;
  scalexin: number;
  scaleyin: number;
  offsetxin: number;
  offsetyin: number;
  easingin: string;
  showuntil: number;
  delayout: number;
  durationout: number;
  fadeout: boolean;
  rotateout: number;
  rotatexout: number;
  rotateyout: number;
  scalexout: number;
  scaleyout: number;
  offsetxout: number;
  offsetyout: number;
  easingout: string;
}

export interface SliderConfig {
  slug: string;
  name: string;
  width: number;
  height: number;
  background: string;
  slideDelay: number;
  fadeInDuration: number;
  layers: SliderLayer[];
}
`;
fs.writeFileSync(path.join(outDir, 'types.ts'), types);
console.log('Types written');
