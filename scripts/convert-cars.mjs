import XLSX from 'xlsx';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcPath = resolve('/Users/arifismailbayrak/Downloads/Database of UK Cars.xlsx');
const outPath = resolve(__dirname, '../src/data/cars.json');

const wb = XLSX.readFile(srcPath);
const ws = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(ws);

writeFileSync(outPath, JSON.stringify(rows, null, 0));
console.log(`✓ Converted ${rows.length} cars → src/data/cars.json`);
