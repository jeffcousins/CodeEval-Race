var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var numArr = line.split(',');
  var results = [];
  numArr.forEach(function(number) {
    if (results.indexOf(number) === -1) {
      results.push(number);
    }
  });
  return results.join(',');
}
