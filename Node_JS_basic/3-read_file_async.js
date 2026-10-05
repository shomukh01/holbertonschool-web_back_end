const fs = require('fs');

function countStudents(path, log = console.log) {
  return new Promise((resolve, reject) => {
    try {
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

        log(`Number of students: ${rows.length}`);
        studentsByField.forEach((firstNames, field) => {
          log(
            `Number of students in ${field}: ${firstNames.length}. List: ${firstNames.join(', ')}`,
          );
        });
        resolve();
      });
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}

module.exports = countStudents;
