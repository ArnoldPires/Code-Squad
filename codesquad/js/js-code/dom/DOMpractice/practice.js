/** ADD EVENT LISTENR PRACTICE  */

 let clickBtn = document.getElementById('button');

 clickBtn.addEventListener('click', () => {
     alert('This was triggered by the event Handler')
 })

 function doSomething() {
     alert('This was triggered by the onclick method. overriding the Eventhandler')
 }
doSomething()

/** SELECTOR PRACTICE  */

 let elements = document.getElementsByClassName('list-item');
 let anotherElement = document.getElementsByTagName('li');
 let thirdElement = document.querySelector('.list-item')

 console.log(anotherElement);
 console.log(elements)
 console.log(elements[2])
 console.log(elements[2].innerHTML)
 console.log(elements[2].innerText)
 console.log(thirdElement)

/* CREATING A NEW ELEMENT */

 var el = document.getElementsByTagName('div')[0];
 var childEl = document.createElement('h3')
 var textnode = document.createTextNode('1st EXAMPLE this appends on the bottom');
 childEl.appendChild(textnode);

 el.appendChild(childEl);

 /* REPLACE a DOM ELEMENT *

 var el = document.querySelector('.secondEx');

 var newEl = document.createElement('p');
 newEl.innerHTML = '<b>Hi, im the nice little replacement</b>'

   replace el with newEl
 el.parentNode.replaceChild(newEl, el);


 /* EMPTY AN ELEMENTS CONTENTR*/

 var el = document.querySelector('.thirdEx');
 el.innerHTML = '';

 /* REMOVING AN ELEMENT*

 var el = document.querySelector('.fourthEx');
 el.parentNode.removeChild(el);

 /* GET THE TEXT CONTENT OF AN ELEMENT*

 var el = document.querySelector('.fifthEx');
 text = el.textContent || el.innerText;
 console.log(text);


 /* SHOW
 EXAMPLE OF
  APPENDING
  ELEMENTS */



 /** ITERATING OVER a LIST OF SELECTED ELEMENTS */

 var divs = document.querySelectorAll('.seventhEx')
 let len = divs.length;

 for (var i = 0; i < len; i++) {
     divs[i].style.color = "green";
 }
