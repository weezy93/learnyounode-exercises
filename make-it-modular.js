var fs = require("fs");
var path = require("path");
var filtered = require("./make-it-modular2");



filtered(process.argv[2], process.argv[3], function(err, data) {
	if (err){
		console.log(err);
	} else {
		data.forEach(function(element){
			console.log(element);
			return element;
		});
	}
});

