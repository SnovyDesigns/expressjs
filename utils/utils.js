const fs = require('fs');
const path = require('path');
const Q = require('q');

function file (filename) {
	return path.join(__dirname, 'database', filename);
}

function getNote (fileName) {
	let def = Q.defer();

	fs.readFile(file(fileName), 'utf8', function(err, data) {
		if (err) {
			def.reject(err);
		} else {
			def.resolve(data);
		}
	});

	return def.promise;
}

function updateNote (fileName, data) {
	let def = Q.defer();

	fs.writeFile(file(fileName), data, function(err) {
		if (err) {
			def.reject(err);
		}
		fs.readFile(file(fileName), 'utf8', function(err, data) {
			if (err) {
				def.reject(err);
			} else {
				def.resolve(data);
			}
		});
	});

	return def.promise;
}

module.exports = {
	read: getNote,
	update: updateNote
};