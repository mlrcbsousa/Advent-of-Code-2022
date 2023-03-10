import useFileParser from '../utils/useFileParser';
const { lines, c } = useFileParser(__dirname, 'input.txt');

const PRIORITIES = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const CHUNK_SIZE = 3;
let sum = 0;

for (let i = 0; i < lines.length; i += CHUNK_SIZE) {
  const chunk = lines.slice(i, i + CHUNK_SIZE);
  const elf1 = chunk[0].split('');
  const elf2 = chunk[1].split('');
  const elf3 = chunk[2].split('');

  let match = '';
  for (let i = 0; i < elf1.length; i++) {
    const item = elf1[i];
    if (elf2.includes(item) && elf3.includes(item)) {
      match = item;
      break;
    }
  }
  sum += PRIORITIES.indexOf(match) + 1;
}

c('sum: ', sum);
