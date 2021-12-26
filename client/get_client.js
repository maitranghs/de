var fs = require('fs');
const http = require('http');

// urn:epc:id:sgln:545335.948414.17
// from 2021-12-25T09:28:47.074Z
// to 2021-12-25T12:28:47.074Z
const options_1 = {
  hostname: 'localhost',
  port: 5000,
  path: '/epcisevent?read_point=urn:epc:id:sgln:545335.948414.17&event_time_from=2021-12-25T09:28:47.074Z&event_time_to=2021-12-25T22:28:47.074Z',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};
let req = http.request(options_1, res => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d)
  })
});
req.on('error', error => {
  console.error(error)
});
req.end();

// urn:epc:id:sgln:305466.341598.3
// from 2021-12-25T09:28:47.074Z
// to 2021-12-25T12:28:47.074Z
const options_2 = {
  hostname: 'localhost',
  port: 5000,
  path: '/epcisevent?read_point=urn:epc:id:sgln:305466.341598.3&event_time_from=2021-12-25T09:28:47.074Z&event_time_to=2021-12-25T12:28:47.074Z',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};
req = http.request(options_2, res => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', d => {
    process.stdout.write(d)
  })
});
req.on('error', error => {
  console.error(error)
});
req.end();