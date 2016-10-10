// learnyounode - task 02

var result = 0;
var array = process.argv;
var arrayLength = array.length;
for (var i = 2; i < arrayLength; i++) {
    result += Number(array[i]);
}

console.log(result);
