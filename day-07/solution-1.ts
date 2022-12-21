import useFileParser from '../utils/useFileParser';

const { lines } = useFileParser(__dirname, 'input.txt');
const c = console.log;

interface File {
  name: string;
  size: number;
}

interface Dir {
  name: string;
  files: File[];
  dirs: Dir[];
  parent: Dir | null;
}

function newDir(name: string, parent: Dir | null): Dir {
  return {
    name,
    parent,
    files: [],
    dirs: [],
  };
}

const root = newDir('/', null);

// Parse tree
let parent = root;

for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  const words = line.split(' ');

  if (words[0] === '$') {
    if (words[1] === 'cd') {
      if (words[2] === '..') {
        if (parent.parent) parent = parent.parent;
      } else {
        parent = parent.dirs.find(d => d.name === words[2])!;
      }
    }
  } else if (words[0] === 'dir') {
    parent.dirs.push(newDir(words[1], parent));
  } else {
    parent.files.push({ name: words[1], size: Number(words[0]) })
  }
}

// Calculate size
const LIMIT = 100000;
let total = 0;

function dirSize(dir: Dir | null) {
  let size = 0;

  if (dir?.files) {
    size += dir.files.reduce((acc, file) => acc + file.size, 0);
  }

  if (dir?.dirs) {
    size += dir.dirs.reduce((acc, dir) => acc + dirSize(dir), 0);
  }

  if (size <= LIMIT) total += size;

  return size;
}

dirSize(root);

c('total: ', total);
