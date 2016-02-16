var fs = require("fs");

// response is what comes back after reading the file
fs.readFile(process.argv[2], function(err, response){
		if(!err) {
		var numberOfNewLines = response.toString().split("\n").length;
		console.log(numberOfNewLines - 1);
	} else {
	console.log("something went wrong!");
	}
});


//pass