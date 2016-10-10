// learnyounode - task 09
// manually handling multiple asyn requests

const http = require('http');
const bl = require('bl')

var result = new Array(3);
var processResult = function(index, data) {
	result[index] = data;
	if (result[0] && result[1] && result[2]) {
		console.log(result[0]);
		console.log(result[1]);
		console.log(result[2]);
	}
}

var call = function (index) {
	http.get(process.argv[2 + index], function (response) {
		response.setEncoding('utf8');
		response.pipe(bl(function (err, data) {
	 		if (err) {
	 			return console.error(err);
	 		}
	 		processResult(index, data.toString());
		}))
	});
}

call(0);
call(1);
call(2);