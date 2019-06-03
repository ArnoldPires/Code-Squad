let theColors = colorBoxes(6);
let color = document.querySelectorAll('.color');
let hiddenColor = theColors[randomInt()];
showColors();
function easyMode() {
  let easy = document.getElementById('colorContainer-2');
  let theColors = colorBoxes(3);
  easy.parentNode.removeChild(easy);
  return true;
}
document.getElementById('hiddenColor').innerHTML = hiddenColor;
document.getElementById('changeColors').addEventListener('click', function () {
  changeColors();
});
function showColors() {
  for (let x = 0; x < color.length; x++) {
    color[x].style.backgroundColor = theColors[x];
    color[x].onclick = function() {
      let selectedColor = this.style.backgroundColor;
      if (selectedColor === hiddenColor) {
        document.querySelector("#message").textContent = "You got it correct!";
        correctColor(selectedColor);
        document.getElementById("message").style.color = '#4682b4';
        document.querySelector("#changeColors").textContent = "Would you like to play again?";
      } else {
        document.querySelector("#message").textContent = "Wrong!";
        this.style.backgroundColor = "#232323";
        document.getElementById("message").style.color = '#e20505';
      }
    };
  }
}
function correctColor(theColors) {
  for (let x = 0; x < color.length; x++) {
    color[x].style.backgroundColor = theColors;
  }
  document.getElementsByTagName('h1')[0].style.backgroundColor = theColors;
  return;
}
function randomInt() {
  return Math.floor(Math.random() * theColors.length);
}
function colorBoxes(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(randomColorBoxes());
  }
  return array;
}
function changeColors() {
  theColors = colorBoxes(6);
  hiddenColor = theColors[randomInt()];
  document.getElementById('hiddenColor').innerHTML = hiddenColor;
	document.querySelector("#message").textContent = "";
	document.getElementsByTagName('h1')[0].style.backgroundColor = 'rgb(35, 35, 35)';
	document.querySelector('#changeColors').textContent = "New Colors";
	showColors();
}
function randomColorBoxes() {
  let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
