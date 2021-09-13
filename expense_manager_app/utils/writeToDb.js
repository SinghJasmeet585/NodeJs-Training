const path = require('path');
const fs = require('fs');

module.exports = data =>
  fs.writeFileSync(
    path.join(__dirname, '../server/db.json'),
    JSON.stringify(data),
    { encoding: 'utf-8' },
    err => {
      if (err) {
        throw err;
      }
    }
  );
