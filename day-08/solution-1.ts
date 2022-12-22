import useFileParser from '../utils/useFileParser';
const { lines, c } = useFileParser(__dirname, 'input.txt');

let trees = lines.length * 2 + lines[0].length * 2 - 4;

for (let i = 1; i < lines.length - 1; i++) {
  const line = lines[i];
  for (let j = 1; j < line.length - 1; j++) {
    const tree = line[j];
    let k;

    // top
    for (k = 0; k < i; k++) {
      if (lines[k][j] >= tree) break;
    }
    if (k === i) { trees++; continue; }

    // bottom
    for (k = i + 1; k < lines.length; k++) {
      if (lines[k][j] >= tree) break;
    }
    if (k === lines.length) { trees++; continue; }

    // left
    for (k = 0; k < j; k++) {
      if (lines[i][k] >= tree) break;
    }
    if (k === j) { trees++; continue; }

    // right
    for (k = j + 1; k < line.length; k++) {
      if (lines[i][k] >= tree) break;
    }
    if (k === line.length) { trees++; continue; }
  }
}

c('visible trees: ', trees);
