import useFileParser from '../utils/useFileParser';

const { file } = useFileParser(__dirname, 'input.txt');
const c = console.log;

const MARKER_START = 14;
let start = 0;

for (let i = 3; i < file.length; i++) {
  const word = file.slice(i - MARKER_START + 1, i + 1);
  const marker: string[] = [];

  for (let j = 0; j < MARKER_START; j++) {
    if (marker.includes(word[j])) {
      break;
    }
    marker.push(word[j]);
  }

  if (marker.length === MARKER_START) {
    start = i + 1;
    break;
  }
}

c('start: ', start);
