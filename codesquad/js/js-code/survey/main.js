const name = prompt('What is your name?');
const hobby = prompt('What is your hobby?');
const hobbyHours = prompt('How many hours do you spend on your hobby every week?');
const hobbyMoney = prompt('How much money do you spend on your hobby each week?');

if (hobby === 'none') {
  alert('Get a hobby!');
}

const seriousPhrase = ' you spend on it shows you are serious about '+ hobby +'!'
let messagePart1 = ''
if (hobbyHours > 10) {
    messagePart1 = ' the time ';
}

let messagePart2 = '';
if (hobbyMoney > 200) {
    if (messagePart1 !== '') {
        messagePart2 = ' and the money ';
    } else {
        messagePart2 = ' the money ';
    }
}

if (messagePart1 + messagePart2 !== '') {
    alert(name + ',' + messagePart1 + messagePart2 + seriousPhrase);
} else if (hobby !=='none') {
    alert(name + ', ' + hobby + ' is not the most important thing in your life, is it?');
}
