const c = console.log;

interface Dir {
  name: string;
  files: File[];
  dirs: Dir[];
  parent: Dir | null;
}

export function printDir(dir: Dir | null) {
  if (!dir) {
    return;
  }

  c(dir.name);
  if (dir.files) {
    dir.files.forEach((file) => {
      c(file.name, file.size);
    });
  }
  if (dir.dirs) {
    dir.dirs.forEach((dir) => {
      printDir(dir);
    });
  }
}
