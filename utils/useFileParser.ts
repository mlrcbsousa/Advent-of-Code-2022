import * as fs from 'fs';
import * as path from 'path';

export default function useFileParser(dirname: string, input: string) {
  const filePath = path.join(dirname, input);
  const file = fs.readFileSync(filePath, 'utf8');
  const lines = file.split('\n');

  return {
    file,
    lines,
  }
}