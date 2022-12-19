import useFileParser from '../utils/useFileParser';

const { lines } = useFileParser(__dirname, 'input.txt');
const c = console.log;

const PRIORITIES = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
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

c('sum: ', sum);

