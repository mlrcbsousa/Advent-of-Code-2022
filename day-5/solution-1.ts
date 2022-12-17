import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, 'input.txt');
const file = fs.readFileSync(filePath, 'utf8');

const lines = file.split('\n');

lines.forEach(line => {
  console.log(line);

})

console.log('result: ', 'foo');
