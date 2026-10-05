const fs = require('fs');

function countStudents(path) {
  let contents;
  try {
    contents = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const rows = contents
    .split(/\r?\n/)
    .slice(1)
    .filter((line) => line.trim().length > 0)
    .map((line) => line.split(',').map((value) => value.trim()));
  const studentsByField = new Map();

  rows.forEach(([firstName, , , field]) => {
    if (!studentsByField.has(field)) {
      studentsByField.set(field, []);
    }
    studentsByField.get(field).push(firstName);
  });

  console.log(`Number of students: ${rows.length}`);
  studentsByField.forEach((firstNames, field) => {
    console.log(
      `Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`,
    );
  });
}

module.exports = countStudents;
