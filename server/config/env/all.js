var path = require('path'),
rootPath = path.normalize(__dirname + '/../../..');

console.log(rootPath);

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3222,
    db: process.env.MONGOHQ_URL    
};
