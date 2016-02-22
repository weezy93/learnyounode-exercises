
var fs = require("fs");
var path = require("path");

function filtered (dirName, extension, callback){
		fs.readdir(dirName, function(err, list){

			if(err){
				return callback(err);

			} else {
				var responseArray = list.filter(function(fileName){
					return path.extname(fileName) === "." + extension;
					});
				callback(null, responseArray);
				}
			});
}

module.exports = filtered;
