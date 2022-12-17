import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, 'input.txt');
const file = fs.readFileSync(filePath, 'utf8');

const PRIORITIES = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lines = file.split('\n');
let sum = 0;

lines.forEach(line => {
  const middle = Math.ceil(line.length / 2);
  const items = line.split('');
  const half1 = items.splice(0, middle);
  const half2 = items.splice(-middle);

  let match = '';
  for (let i = 0; i < half1.length; i++) {
    if (half2.includes(half1[i])) {
      match = half1[i];
      break;
    }
  }
  sum += PRIORITIES.indexOf(match) + 1;
})

console.log('sum: ', sum);

