let donation = prompt('How much would you like to donate?');
let donateCar = prompt('Do you have an old car you would like to donate?');
  if ((donation >= 1000 && donateCar === 'yes')){
    alert('Thank you so much. You are now a platinum donor.')
  }else if ((donation <=1000 && donateCar === 'yes')){
    alert('Thank you so much. You are now a platinum donor.')
  }else if ((donation >=1000 && donateCar === 'no')){
    alert('Thank you so much. You are now a platinum donor.')
  }else if ((donation <=0 && donateCar === 'no')){
    alert('Maybe next time.')
  }else if ((donation <=0 && donateCar === 'yes')){
    alert('Thank you so much. You are now a platinum donor.')
  }else if ((donation <=1000 && donateCar === 'no')){
    alert('Thank you so much.')
  }
//You have a program that asks people to donate to your important cause.
//The program should ask how much money (in dollars) they would like to donate.
// It should then ask if they would like to donate their used car.
//If the donation in dollars is greater than $1000 or if they say "yes" to donating their used car, then the program should tell them using the alert method "Thank you so much.
//You are now a platinum donor."
//Any other donation the program should just tell them "Thank you so much."  If they decide not to donate ($0 and no car), it should say "Maybe next time."
