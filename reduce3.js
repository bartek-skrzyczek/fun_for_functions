const fs = require('fs');

fs.readFile('./text.txt', {encoding: 'utf-8'}, (err, data) => {
    if (err) throw err;
    let obj = data
    .trim()
    .split('\n')
    .map(line => );
    console.log('output', obj);
  })