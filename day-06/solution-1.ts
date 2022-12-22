import useFileParser from '../utils/useFileParser';
const { file, c } = useFileParser(__dirname, 'input.txt');

let start = 0;

for (let i = 3; i < file.length; i++) {
  const word = file.slice(i - 3, i + 1);
  const marker: string[] = [];

  for (let j = 0; j < 4; j++) {
    if (!marker.includes(word[j])) {
      marker.push(word[j]);
    }
  }

  if (marker.length === 4) {
    start = i + 1;
    break;
  }
}

c('start: ', start);
