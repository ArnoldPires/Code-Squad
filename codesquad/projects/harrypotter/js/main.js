function flexIt() {
  let a = document.querySelector('.needFlex');
  a.classList.toggle("flexIt");
};
function emphasize(house) {
  let places = document.getElementsByClassName(house);
  for (let x = 0; x < places.length; x++) {
    places[x].classList.toggle('emphasis');
  }
};
function hideTheSnitch() {
  let remove = document.querySelector('#golden');
  remove.classList.toggle('snitch');
};
