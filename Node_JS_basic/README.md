# Node.js Basics

This directory contains the tasks for the Holberton School Node.js basics project.

The project uses Babel and ESLint configuration files, and its npm manifest includes Express for Task 6. Use `npm install` to install its dependencies; the available npm scripts are `npm test`, `npm run dev`, and `npm run lint`.

## Task 0: Executing basic JavaScript with Node.js

`0-console.js` exports `displayMessage(message)`, which prints the supplied message to STDOUT.

## Task 1: Reading from standard input

`1-stdin.js` reads a name from standard input and prints it with the closing message.

## Task 2: Reading a CSV file synchronously

`2-read_file.js` exports `countStudents(path)`, which reads the student CSV, prints the total and each field's count and first-name list, and throws if the file cannot be read.

## Task 3: Reading a CSV file asynchronously

`3-read_file_async.js` exports `countStudents(path)`, which reads the student CSV asynchronously and returns a Promise that resolves after printing the same student summary or rejects if the file cannot be read.

## Task 4: Creating a basic HTTP server

`4-http.js` exports an HTTP server that responds to every request with `Hello Holberton School!` as plain text and listens on port 1245 when run directly.

## Task 5: Extending the HTTP server

`5-http.js` responds to `/` with the greeting and `/students` with the student summary from the CSV path supplied as the first command-line argument.

## Task 6: Creating an HTTP server with Express

`6-http_express.js` exports an Express app that responds to `GET /` with the plain-text greeting and listens on port 1245. Express handles unknown routes with its default 404 response.

## Task 7: Extending the Express server

`7-http_express.js` serves the greeting at `GET /` and the student summary from the CSV path supplied as the first command-line argument at `GET /students`. It listens on port 1245.

## Task 8: Organizing a full Express server

`full_server/server.js` starts an Express server on port 1245. Its routes serve the homepage, a CSV-backed student summary, and student lists by major. The CSV path is supplied as the first command-line argument. Start the development server from this directory with `npm run dev`.
