// learnyounode - task 04
// async file IO

var fs = require('fs');

var pathToFile = process.argv[2];

fs.readFile(pathToFile, 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }

    var newlineCount = data.split('\n').length - 1
    console.log(newlineCount);
});