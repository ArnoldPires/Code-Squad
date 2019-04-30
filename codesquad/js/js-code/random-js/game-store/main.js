//You are gathering customer feedback for a game they have played
//Create a button that when clicked triggers a prompt response
//When it triggers, display the game name in the browser
//The user wil then be asked, how would they rate the Game
//Scores are based off of 1-5 Score
//Display this score next to the game in the browser
//If the user gives the game a 4/5 or 5/5 then change the games name to green
//If its not 4/5 or 5/5 change the text to red
function gather() {
  let gameName = prompt('What is the name of the game you wish to review?');
  document.getElementById("displayName").innerHTML = gameName;
  let userScore = prompt('Whats your score? Please rate between 1-5');
    if (userScore >=4) {
      document.getElementById("displayName").style.backgroundColor = 'green';
    }else if (userScore <4) {
      document.getElementById("displayName").style.backgroundColor = 'red';
    }
  document.getElementById("score").innerHTML = userScore;
}
gather();
