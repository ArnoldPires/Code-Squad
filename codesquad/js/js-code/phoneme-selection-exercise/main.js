let values = ["ma", "pa", "ja", "la", "sa", "va", "she", "sir", "scr", "sip", "lip", "ipt", "sos", "si  ", " is ", "sit", "maw", "awe", "paw", "caw", "some"];
let answer = " ";
for (x=0; x < values.length ; x++) {
  if (x % 3 === 2) {
    answer += values[x];
  }
}
document.getElementById('display').innerHTML = answer;
