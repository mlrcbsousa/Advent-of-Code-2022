import useFileParser from '../utils/useFileParser';
const { lines, c } = useFileParser(__dirname, 'input.txt');

let highest = 0;

for (let i = 1; i < lines.length - 1; i++) {
  const line = lines[i];
  for (let j = 1; j < line.length - 1; j++) {
    const tree = line[j];
    let t /* top */, b /* bottom */, l /* left */, r /* right */;

    for (t = 1; t < i; t++) {
      if (lines[i - t][j] >= tree) break;
    }
    for (b = 1; b < lines.length - i - 1; b++) {
      if (lines[i + b][j] >= tree) break;
    }
    for (l = 1; l < j; l++) {
      if (lines[i][j - l] >= tree) break;
    }
    for (r = 1; r < line.length - j - 1; r++) {
      if (lines[i][j + r] >= tree) break;
    }
    let score = t * b * l * r;
    if (score > highest) highest = score;
  }
}

c('highest scenic score: ', highest);
