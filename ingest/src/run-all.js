import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, '../../site/public/data');

// Seed data (replace later with real connectors for each brand)
const seed = {
  manufacturers: [
    { id: 'maxxis', name: 'Maxxis', website: 'https://www.maxxis.com/' },
    { id: 'schwalbe', name: 'Schwalbe', website: 'https://www.schwalbe.com/' },
    { id: 'specialized', name: 'Specialized', website: 'https://www.specialized.com/' },
    { id: 'continental', name: 'Continental', website: 'https://www.continental-tires.com/' },
    { id: 'vittoria', name: 'Vittoria', website: 'https://www.vittoria.com/' },
    { id: 'michelin', name: 'Michelin', website: 'https://bike.michelin.com/' },
    { id: 'wtb', name: 'WTB', website: 'https://www.wtb.com/' },
    { id: 'kenda', name: 'Kenda', website: 'https://bicycle.kendatire.com/' },
    { id: 'bontrager', name: 'Bontrager', website: 'https://www.trekbikes.com/' }
  ],
  models: [],
  skus: [],
  offers: []
};

await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, 'tyres.json'), JSON.stringify(seed, null, 2), 'utf8');
console.log('Wrote site/public/data/tyres.json');
