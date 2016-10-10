// learnyounode - task 08
// http collect

const http = require('http');
const bl = require('bl')

var url = process.argv[2];

http.get(url, function (response) {
	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
 		if (err) {
 			return console.error(err);
 		}

 		console.log(data.length);
 		console.log(data.toString());
	}))
});