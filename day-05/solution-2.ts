import useFileParser from '../utils/useFileParser';
const { file, c } = useFileParser(__dirname, 'input.txt');

function move(n: number, from: number, to: number) {
  crates[to - 1].push(...crates[from - 1].splice(-n));
}

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
  move(n, from, to);
});

let result = crates.map((s) => s[s.length - 1]).join("");

c(result);