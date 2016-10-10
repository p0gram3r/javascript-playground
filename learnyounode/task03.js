// learnyounode - task 03

var fs = require('fs');

var pathToFile = process.argv[2];
var content = fs.readFileSync(pathToFile, 'utf8');

var newlineCount = content.split('\n').length - 1
console.log(newlineCount);