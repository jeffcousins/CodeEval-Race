var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  return line.split(' ').reduce(function(prev, next) {
    if (next.length > prev.length) {
      return next;
    } else {
      return prev;
    }
  });
}
