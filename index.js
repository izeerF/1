const http = require('http');

const package = require('./package.json');

let port = 3000;

console.log("Starting server on port: "+port);

http.createServer(function (req, res) {
    res.writeHead(418, {'Content-Type': 'text/html'})
    res.write(`<json>${package.toString()}</json>`);
    res.end();
}).listen(port);