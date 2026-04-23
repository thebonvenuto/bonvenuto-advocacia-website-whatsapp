import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir = path.resolve('src/assets');
const outputDir = path.join(assetsDir, 'optimized');

const heroes = [
  {
    input: 'Foto Carlo1.jpg',
    outputs: [
      { name: 'hero-home-mobile.avif', width: 720, height: 960 },
      { name: 'hero-home-desktop.avif', width: 960, height: 1200 },
    ],
  },
  {
    input: 'Pensão Alimentícia hero.png',
    outputs: [
      { name: 'hero-pensao-alimenticia-mobile.avif', width: 720, height: 900 },
      { name: 'hero-pensao-alimenticia-desktop.avif', width: 960, height: 1200 },
    ],
  },
  {
    input: 'Revisão de Pensão hero.jpg',
    outputs: [
      { name: 'hero-revisao-pensao-mobile.avif', width: 720, height: 900 },
      { name: 'hero-revisao-pensao-desktop.avif', width: 960, height: 1200 },
    ],
  },
  {
    input: 'Paternidade e Pensão hero.png',
    outputs: [
      { name: 'hero-paternidade-pensao-mobile.avif', width: 720, height: 900 },
      { name: 'hero-paternidade-pensao-desktop.avif', width: 960, height: 1200 },
    ],
  },
  {
    input: 'Alimentos Gravídicos hero.png',
    outputs: [
      { name: 'hero-alimentos-gravidicos-mobile.avif', width: 720, height: 900 },
      { name: 'hero-alimentos-gravidicos-desktop.avif', width: 960, height: 1200 },
    ],
  },
  {
    input: 'Guarda e Convivência hero (2).png',
    outputs: [
      { name: 'hero-guarda-convivencia-mobile.avif', width: 720, height: 900 },
      { name: 'hero-guarda-convivencia-desktop.avif', width: 960, height: 1200 },
    ],
  },
];

await fs.mkdir(outputDir, { recursive: true });

for (const hero of heroes) {
  const inputPath = path.join(assetsDir, hero.input);

  for (const output of hero.outputs) {
    const outputPath = path.join(outputDir, output.name);

    await sharp(inputPath)
      .rotate()
      .resize(output.width, output.height, {
        fit: 'cover',
        position: 'centre',
      })
      .avif({
        quality: 68,
        effort: 6,
      })
      .toFile(outputPath);

    const stats = await fs.stat(outputPath);
    console.log(`${output.name}: ${(stats.size / 1024).toFixed(1)} KB`);
  }
}
