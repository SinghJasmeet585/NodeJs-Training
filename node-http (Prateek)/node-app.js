const http = require('http');
const { URL } = require('url');

http
  .createServer((req, res) => {
    switch (req.method) {
      case 'GET':
        const query = new URL(`http://localhost:3000${req.url}`);
        res.write(query.searchParams.get('name'));
        break;
      case 'POST':
        res.write('post');
        break;
    }
    res.end();
  })
  .listen(3000);
