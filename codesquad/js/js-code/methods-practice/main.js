//textBox = newItem
//theList = display
let powerRangers = ['Tommy Oliver', ' Kimberly Hart', ' Trini Kwan', ' Billy Cranston', ' Jason Lee Scott', ' Zack Talor'];
function theList() {
  document.getElementById("theList").innerHTML = powerRangers;
}
theList();
function unshiftButton() {
  let userInput =  document.getElementById('textBox').value;
  powerRangers.unshift(userInput);
  theList();
}
function shiftButton() {
  powerRangers.shift();
  theList();
}
function pushButton() {
  let userInput = document.getElementById('textBox').value;
  powerRangers.push(userInput);
  theList();
}
function popButton() {
  powerRangers.pop();
  theList();
}
function clearButton() {
  powerRangers = [];
  theList();
}
