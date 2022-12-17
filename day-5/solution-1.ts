import * as fs from 'fs';
import * as path from 'path';

const c = console.log

const filePath = path.join(__dirname, 'input.txt');
const file = fs.readFileSync(filePath, 'utf8');

const [head, procedure] = file.split('\n\n');
const rows = head.split('\n');
const steps = procedure.split('\n');

const crates: string[][] = [];

rows.pop();
rows.reverse()

rows.forEach(row => {
  let stack = 0;

  row.split('').reduce(function(acc, crate, i) {
    if (i % 4 === 1) {
      acc[stack] ??= [];
      if (crate !== ' ') {
        acc[stack].push(crate);
      }
      stack++;
    }
    return acc;
  }, crates)
})

steps.forEach(function(step) {
  const [n, from, to] = step.match(/\d+/g)!.map(Number);

  for (let i = 0; i < n; i++) {
    crates[to - 1].push(crates[from - 1].pop()!);
  }
});

let result = crates.map((s) => s[s.length - 1]).join("");

c(result);