var passwordsMap = require('./passwords_map');
var path = require('path');
var fs = require('fs');

var passwords = {};

function generatePassword(key) {
	if(!passwords[key]) {
		passwords[key] = `${key}-${Math.floor(Math.random() * 10000)}`; // A four digits number
	}
	return passwords[key];
}

passwordsMap.forEach(module => {
	var filePath = path.resolve(__dirname, module.path);
	fs.readFile(filePath, function(err, data) {
		if(err) {
			console.error(err);
		} else {
			var newFileContent = data.toString();
			module.passwords.forEach(password => {
				newFileContent = newFileContent.replace(new RegExp(password.target, 'g'), generatePassword(password.key));
			});

			fs.writeFile(filePath, newFileContent, function(err) {
				if(err) {
					console.error(err);
				}
			})
		}
	})
});