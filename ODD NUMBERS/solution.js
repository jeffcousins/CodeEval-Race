var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    solution(line);
  }
});

function solution(line){
  for (var i = 1; i <= 99; i += 2) {
    console.log(i);
  }
}
