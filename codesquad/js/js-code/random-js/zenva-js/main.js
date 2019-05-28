//Hello Javascript
alert("hello world!");
//variables
var myVariable;
var myOtherVariable = 40;
myVariable = 50;
alert(myVariable);
alert(myVariable + myOtherVariable); //this equals 90
alert(myVariable - myOtherVariable);//This equals 10
alert(myOtherVariable - myVariable);//This equals -10
var text = "My name is Arnold";
alert(text);
//Arithmetic operations
//All math follows the PEMDAS rules
//addition
var a = 1000;
var b = a + 200;//This equals 1200
alert(b);
//substraction
var c = 100 - 50;//This equals 50
alert(c);
//multiplication
var m = c * 10;//This equals 500
alert(m);
//division
var d = 500 / 2;//This equals 250
alert(d);
//mix
var combo = 100 + 50 / 2 * 10;//This equals 350
alert(combo);
//objects
//var player = new Object();
var player = {
  arnold: 'My name',
  energy: 100,
  lives: 2,
  x: 19,
  y: 100,
  color: 'red'
};
console.log(player);
console.log(player.arnold);
console.log(player['color']);
player.arnold = 'my real name';
console.log(player);
player.otherName = {
  name: 'arnaldo'
};
