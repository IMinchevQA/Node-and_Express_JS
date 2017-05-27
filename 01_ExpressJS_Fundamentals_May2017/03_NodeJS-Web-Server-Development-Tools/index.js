const http = require('http');
const url = require('url');
const handlers = require('./handlers');

const port = 9877;

http
    .createServer((req, res) => {

        req.path = url.parse(req.url).pathname;

        for (let handler of handlers) {
            let next = handler(req, res);
            if (!next) {
                break;
            }
        }
    })
    .listen(port);

console.log(`Server is listening on port ${port}`);