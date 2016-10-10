const fs = require('fs');
const path = require('path');

module.exports = function (pathToDir, fileExt, callback) {
	fs.readdir(pathToDir, function (err, fileNameArray) {
	    if (err) {
   			return callback(err) // early return
	    }

		var filteredFiles =  fileNameArray.filter(function (file) {
	        var fext = "."+ fileExt;
      		return path.extname(file) === fext;
    	});

    	return callback(null, filteredFiles);
	});
}