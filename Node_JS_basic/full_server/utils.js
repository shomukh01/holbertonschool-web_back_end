const fs = require('fs');

async function readDatabase(path) {
  const contents = await fs.promises.readFile(path, 'utf8');
  const rows = contents
    .split(/\r?\n/)
    .slice(1)
    .filter((line) => line.trim().length > 0)
    .map((line) => line.split(',').map((value) => value.trim()));
  const students = {};

  rows.forEach(([firstName, , , field]) => {
    if (!students[field]) {
      students[field] = [];
    }
    students[field].push(firstName);
  });

  return students;
}

module.exports = readDatabase;
