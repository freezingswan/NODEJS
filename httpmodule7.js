// server_exp7.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.writeHead(200);
        res.end('<h1>Welcome to Node.js HTTP Server</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end('<h1>About Page</h1>');
    } else {
        res.writeHead(404);
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));