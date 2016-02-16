// var fs = require("fs");
// var path = require("path");
// // tells you where the file is

// // response is what comes back after reading the file
// fs.readdir(process.argv[2], function(err, list){
// //list is an array of files
// 		var ext = "." + process.argv[3];

// 		if(!err) {
// 			list.map(function(element){
// 				if(ext === path.extname(element)){
// 						//.extname() returns the extension including the .
// 					console.log(element);
// 					}
// 				});
// 	} else {
// 	console.log("something went wrong!");
// 	}
// });

//pass


// OR

// var fs = require("fs");
// var path = require("path");

// var filePath = process.argv[2];
// var extension = "." + process.argv[3];

// fs.readdir(filePath, function(err, list){
// 	if(!err) {
// 		list.filter(function(fileName){
// 			return path.extname(fileName) === extension;
// 		})
// 		.forEach(function(element){
// 			console.log(element);
// 		});

// 	} else {
// 		console.log("something is wrong");
// 	}
// });