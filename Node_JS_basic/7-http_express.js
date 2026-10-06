const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (request, response) => {
  response.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  response.type('text/plain');
  response.write('This is the list of our students\n');
  countStudents(process.argv[2], (line) => {
    response.write(`${line}\n`);
  })
    .then(() => response.end())
    .catch(() => response.end('Cannot load the database'));
});

app.listen(1245);

module.exports = app;
