global.hoje = new Date();
console.log(global.hoje);

var hello = require('./hello');
var human = require('./human');

hello('Hello seu bilolas');
human.hello('Hello seus bilolas humanos');

