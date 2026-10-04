process.stdout.write('Welcome to Holberton School, what is your name?\n');

let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => {
  input += chunk;
});

process.stdin.on('end', () => {
  const name = input.length === 0 ? '(undefined)' : input.replace(/[\r\n]+$/, '');
  process.stdout.write(`Your name is: ${name}\n`);
  process.stdout.write('This important software is now closing\n');
});
