import { createReadStream } from 'fs';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { parse } from 'csv-parse';

const srcPath = resolve('/Users/arifismailbayrak/Downloads/cars_full_export_uk_used_full_inventory_sample_1k.csv');
const outPath = resolve('./src/data/cars.json');

const KEEP = ['id','heading','vdp_url','price','miles','year','make','model','variant',
  'body_type','drivetrain','fuel_type','transmission','doors','insurance_group',
  'seating_capacity','is_ulez_compliant','exterior_color','num_owners',
  'efficiency_combined_mpg','performance_power_bhp','photo_url',
  'seller_name','city','source'];

const rows = [];

createReadStream(srcPath)
  .pipe(parse({ columns: true, skip_empty_lines: true, trim: true }))
  .on('data', (row) => {
    const slim = {};
    for (const k of KEEP) slim[k] = row[k] ?? null;
    // coerce numerics
    slim.price = parseFloat(slim.price) || 0;
    slim.miles = parseInt(slim.miles) || 0;
    slim.year  = parseInt(slim.year)  || 0;
    slim.seating_capacity = parseInt(slim.seating_capacity) || 5;
    slim.is_ulez_compliant = slim.is_ulez_compliant === '1' || slim.is_ulez_compliant === 'true';
    slim.efficiency_combined_mpg = parseFloat(slim.efficiency_combined_mpg) || 0;
    slim.performance_power_bhp   = parseFloat(slim.performance_power_bhp)   || 0;
    slim.num_owners = parseInt(slim.num_owners) || null;
    slim.insurance_group_num = parseInt(slim.insurance_group) || 20;
    rows.push(slim);
  })
  .on('end', () => {
    writeFileSync(outPath, JSON.stringify(rows));
    console.log(`✓ Converted ${rows.length} cars → src/data/cars.json`);
  })
  .on('error', (e) => { console.error(e); process.exit(1); });
