var fs = require('fs');

var files = [
	'index.html'
]

files.forEach(function(file, idx){
	fs.createReadStream('./src/' + file ).pipe(fs.createWriteStream('./dist/' + file ));
})

console.log(files.length + ' Files Copied!');