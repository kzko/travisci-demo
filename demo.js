/*jshint esversion: 6 */

var http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('travis demo');
}).listen(8080, '127.0.0.1');

console.log('server running at http://127.0.0.1:8080');

