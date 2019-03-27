let answer = prompt ('Will you get me some chips');
  if (answer === 'yes') {
    alert('You are a great friend!');
  }
  if (answer === 'no') {
    alert('Wow. Really? You are a horrible friend!');
  } else {
    prompt('Please! Please! Please! I dont know if Ill live without it!');
    if (answer === 'maybe') {
      confirm('Thank you! Thank You! Thank you!');
  }
}

let answerOne = prompt('What is the capitol of Iowa?');
if (answerOne === 'Des Moines') {
  alert('Nice Job!');
} else {
  alert('No, the capitol is Des Moines');
}

const answerTwo = prompt('Who was the second Vice President of the US?');
if (answerTwo === 'Thomas Jefferson') {
  alert('Good job.');
} else if (answerTwo === 'John Adams') {
  alert('He was the first!');
} else {
  alert('Nope.')
}

let age = prompt('What is your age?');
if (age >= 65) {
  alert('7.50');
} else if (age > 12) {
  alert('10.00');
} else if (age <= 12) {
  alert('7.50');
}

let answerThree = prompt('Do you want to buy a new sports car?');
 if (answerThree === 'yes') {
  alert("Excellent choice!");
} else if (answerThree === 'no') {
  alert("You're missing out.");
} else {
  alert("Sorry, I didn't understand you.")
}
  //if (answer === 'maybe') {
    //alert('Please! I really want some chips. And remember you owe me from last time!');
    //prompt('Will you buy me some chips now?')
    //  if (answer === 'sure') {
    //  alert('You are awesome! Thank you!');
  //  }
//}
