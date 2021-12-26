var fs = require('fs');
const http = require('http');

// Read data from json file
var obj;
fs.readFile('10k_aggregation_event.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  // request to server
  obj.forEach(e => {
    const options = {
        hostname: 'localhost',
        port: 5000,
        path: '/epcisevent',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const req = http.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);
      });
      req.on('error', error => {
        console.error(error)
      });
      req.write(JSON.stringify(e));
      req.end();
  });
});