// learnyounode - task 05
// filtered 'ls'

const fs = require('fs');
const path = require('path');

var pathToDir = process.argv[2];
var fileExt = '.' + process.argv[3];

fs.readdir(pathToDir, function asdf(err, fileNameArray) {
    if (err) {
        throw err;
    }

    fileNameArray.forEach(function(fileName) {
    	if (path.extname(fileName) == fileExt) {
		    console.log(fileName);
    	}
	});
});