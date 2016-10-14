// learnyounode - task 13
// http json api server

const http = require('http');
const url = require('url');

function unixtime(date) {
    return {
        unixtime: date.getTime()
    };
}

function parsetime(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}

var server = http.createServer(function (req, res) {
    var result = null;
    var parsedUrl = url.parse(req.url, true);
    var parsedDate = new Date(parsedUrl.query.iso);

    if (parsedUrl.pathname === '/api/parsetime') {
        result = parsetime(parsedDate);
    } else if (parsedUrl.pathname === '/api/unixtime') {
        result = unixtime(parsedDate);
    }

    if (result) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    }
    else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(Number(process.argv[2]));