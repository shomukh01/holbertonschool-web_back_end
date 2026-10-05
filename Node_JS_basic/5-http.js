const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Holberton School!');
    return;
  }

  if (request.url === '/students') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('This is the list of our students\n');
    countStudents(process.argv[2], (line) => {
      response.write(`${line}\n`);
    })
      .then(() => response.end())
      .catch(() => response.end('Cannot load the database'));
    return;
  }

  response.writeHead(404, { 'Content-Type': 'text/plain' });
  response.end('Not Found');
});

if (require.main === module) {
  app.listen(1245);
}

module.exports = app;
