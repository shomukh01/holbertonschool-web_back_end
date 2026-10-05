const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, contents) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
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
      resolve();
    });
  });
}

module.exports = countStudents;
