const http = require('http');
const url = require('url');

http
  .createServer((req, res) => {
    switch (req.method) {
      case 'GET':
        // if()
        console.log(req.headers.host);

        const name = new URL(
          `http://${req.headers.host}${req.url}`
        ).searchParams.get('name');
        const age = new URL(req.url).searchParams.get('age');

        res.write(`Name is ${name} and age is ${age}`);
        break;
      case 'POST':
        res.write('POST request received');
        break;
    }
    res.end();
  })
  .listen(3000);
