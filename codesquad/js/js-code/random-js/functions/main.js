function go() {
  alert('hi');
  alert('hey there');
}
go();

function person(name, age){
  alert(name);
  alert(age);
}
person('Arnold', 27);
//making functions like this allow your code to be much more reuseable
// All you gotta do now is just run or input the same function name. Ex: go();
//Rule: Do not repeat yourself

function add(first, second){
  return first+second;
}
var sum = add(1,2);
alert(sum);
//Do the math!
//or
function plus(one,two){
  return one+two;
}
alert( plus(1, 2) );

function personAge(name, age) {
  if (age <20) {
    return name+'!!!';
  }else {
    return name;
  }
}
alert(personAge('Arnold',18) );
