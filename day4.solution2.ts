import * as fs from 'fs';
let file = fs.readFileSync('day4.input','utf8');

const lines = file.split('\n');
let acc = 0;

lines.forEach(line => {
  const [elfA, elfB] = line.split(',');
  const [a1, a2] = elfA.split('-').map(Number);
  const [b1, b2] = elfB.split('-').map(Number);
  if ( !(a2 < b1 || a1 > b2) ) {
    acc++;
  }
})

console.log('acc: ', acc);
