// a loop that runs from 0 to 9
var i;
for (i = 0; i < 10; i++) {
  console.log(i);
}
//A loop that runs through each item in the fruits arry
var fruits = ["Apple", "Banana", "Orange"];
  for (x in fruits) {
    console.log(x);
  }
// A loop that runs as long as i is less than 10
var i = 0;
  while (i < 10) {
    console.log(i);
    i++
  }
// A loop that runs as long as e is less than 10, but increase e with 2 each setTimeout(function () {
//var e = 0;
//  while (e < 10) {
//    console.log(i);
//    i = i + 2;
//  }
//The loop above is endless

//The loop will stop when i is 5
for (i = 0; i < 10; i++) {
  console.log(i);
  if (i == 5) {
    break;
  }
}
// The loop jumps to the next iteration when i is 5
for (i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
