import useFileParser from '../utils/useFileParser';

const { lines } = useFileParser(__dirname, 'input.txt');
const c = console.log;

let acc = 0;

lines.forEach(line => {
  const [elfA, elfB] = line.split(',');
  const [a1, a2] = elfA.split('-').map(Number);
  const [b1, b2] = elfB.split('-').map(Number);
  if ( (a1 >= b1 && a2 <= b2) || (b1 >= a1 && b2 <= a2) ) {
    acc++;
  }
})

c('acc: ', acc);
