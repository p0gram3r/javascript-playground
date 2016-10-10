// learnyounode - task 06

const mymodule = require('./task_06_module.js');

var pathToDir = process.argv[2];
var fileExt = process.argv[3];

mymodule(pathToDir, fileExt, function(error, fileNames) {
	if (error) {
		throw error;
	}

	fileNames.forEach(function(fileName) {
		console.log(fileName);
	});
})