

console.log("seed values", 0);
console.log("seed values", 1);

var x = 0;
var y = 1;

for (var i = 0; i < 30; i++) {
  fNum = x + y;
  console.log(fNum);
  x = y;
  y = fNum;
}