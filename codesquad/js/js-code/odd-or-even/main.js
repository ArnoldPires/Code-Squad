let start = Number(prompt('Enter starting number.'));
let end = Number(prompt('Enter the ending number.'));
let numbers = [];
let oddNumbers = [];
let evenNumbers = [];
if (end > start) {
  for (i = start; i <= end; i++) {
    numbers.push(i);
  }
  function showEvenNumbers() {
    for (x = 0; x < numbers.length; x++) {
      if ((numbers[x] % 2) === 0) {
        evenNumbers.push(x);
      }
    }
  }
  function showOddNumbers() {
    for (w = 0; w < numbers.length; w++) {
      if ((numbers[w] % 2) !== 0) {
        oddNumbers.push(w);
      }
    }
  }
}else {
  alert('Your first number is too high, make sure its lower than your second number');
}
showEvenNumbers();
showOddNumbers();
document.getElementById('showStart').innerHTML = start;
document.getElementById('showEnd').innerHTML = end;
document.getElementById("numbers").innerHTML = numbers;
document.getElementById('showEvenNumbers').innerHTML = evenNumbers.length;
document.getElementById('showOddNumbers').innerHTML = oddNumbers.length;
