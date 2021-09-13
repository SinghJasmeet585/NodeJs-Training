const { add, subtract } = require('./lib/calcFunc');
const http = require('http');
const readLineSync = require('readline-sync');

const a=readLineSync.question('Enter a number = ');
const b=readLineSync.question('Enter another number = ');

console.log(`sum ${a} and ${b} = ${add(a,b)}`);

const sum = add(4, 6);
const sub = subtract(6, 4);

console.log(sum, sub);

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome to NodeJS');
    res.end();
}).listen(3000);