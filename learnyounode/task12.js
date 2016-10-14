// learnyounode - task 12
// http uppercaserer

// npm install through2-map

const http = require('http');
const map = require('through2-map');

var port = Number(process.argv[2]);


var uppercaseIt = function (chunk) {
	return chunk.toString().toUpperCase();
};

var server = http.createServer(function (req, res) {
	if(req.method != "POST") {
		return;
	}
	
	req.pipe(map(uppercaseIt)).pipe(res);

	// doing it manually without throught2-map
	/*
	var result = "";
  	req.on('data', function (chunk) {
    	result += chunk.toString().toUpperCase();
  	});

  	req.on('end', function () {
    	console.log('POSTed: ' + result);
	    res.writeHead(200);
    	res.end(result);
    });
	*/
})

server.listen(port);