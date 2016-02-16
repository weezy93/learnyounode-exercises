var fs = require("fs");

var fileString = fs.readFileSync(process.argv[2]).toString();
var fileArray = fileString.split("\n").length;

console.log(fileArray -1);

//pass