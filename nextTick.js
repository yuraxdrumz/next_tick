const http = require('http');

function compute() {
  // example of synchronus code that runs recursively with setImmediate
  console.log(`compute`)

  // with process next tick every tick will first execute compute and http requests will never be answered as they are queued after next tick
  // process.nextTick(compute)
  // set timeout 0 will put the compute function after the http request on next tick and request will be answered
  // setTimeout(compute,0)
  // set immediate will also compute after http request as it is queued after the http request and http will be answered.
  setImmediate(compute)
}

function listen(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
}


http.createServer(listen).listen(5000, '127.0.0.1');

compute();