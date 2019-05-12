let theColors = generateRandomColors(6);
let color = document.querySelectorAll('.color');
let hiddenColor = theColors[randomInt()];
showColors();
function showColors() {
  for (let x = 0; x < color.length; x++) {
    color[x].style.backgroundColor = theColors[x];
    color[x].onclick = function() {
      let selectedColor = this.style.backgroundColor;
      if (selectedColor === hiddenColor) {
        document.querySelector("#message").textContent = "You got it right!";
        correctColor(selectedColor);
        document.querySelector("#changeColors").textContent = "Lets go again!";
      } else {
        document.querySelector("#message").textContent = "Wrong color";
        this.style.backgroundColor = "#232323";
      }
    };
  }
}
document.getElementById('hiddenColor').innerHTML = hiddenColor;
document.getElementById('changeColors').addEventListener('click', function () {
  changeColors();
});
function correctColor(theColors) {
  for (let x = 0; x < color.length; x++) {
    color[x].style.backgroundColor = theColors;
  }
  document.getElementsByTagName('h1')[0].style.backgroundColor = color;
  return;
}
function randomInt() {
  return Math.floor(Math.random() * theColors.length);
}
function generateRandomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
function changeColors() {
  theColors = generateRandomColors(6);
  hiddenColor = theColors[randomInt()];
  document.getElementById('hiddenColor').innerHTML = hiddenColor;
	document.querySelector("#message").textContent = "";
	document.getElementsByTagName('h1')[0].style.backgroundColor = 'rgb(35, 35, 35)';
	document.querySelector('#changeColors').textContent = "New Colors";
	showColors();
}
