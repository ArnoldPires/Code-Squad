var totalScore1 = 0;
var totalScore2 = 0
var totalScore = 0;
let p1button = document.querySelector("#playerOne").onclick = add1;
let p2button = document.querySelector("#playerTwo").onclick = add2;
let startOver = document.querySelector("#reset").onclick = zero;

function add1() {
  totalScore = totalScore1 +=1;
  document.getElementById('playerOneScore').innerHTML = totalScore1;
    if (totalScore1 === 5) {
      alert("Player one Wins!")
      document.getElementById("playerOneScore").style.color = "#9eff98";
    }
};
function add2() {
  totalScore = totalScore2 +=1;
  document.getElementById('playerTwoScore').innerHTML = totalScore2;
   if (totalScore2 === 5) {
     alert("Player Two Wins!"),
     document.getElementById("playerTwoScore").style.color = "#9eff98";
   };
};
function zero() {
  window.location.reload();
};
