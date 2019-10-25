

console.log(__dirname);
console.log(__filename);
// pluck the file name from the full path
const path = require("path");
// use back ticks ``
console.log(`the file name is ${path.basename(__filename)}`);
