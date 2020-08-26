const args = process.argv;
const resource = args[2];
const path = args[3];
const fs = require('fs');

const request = require('request');
request(resource, (error, response, body) => {
  fs.writeFile( path , body, 'utf8', function(err) {
    if (err) reject(err);
  });
});

