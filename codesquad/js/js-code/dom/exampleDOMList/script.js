
let groceryItems = ['eggs', 'waffles', 'steak', 'chicken', 'steak', 'applejuice', 'cookies', 'cake', 'cheese', 'ham'];

/* Your Code Below */


/* 1.) add items from arry above to list on page */
const list = document.getElementById('grocerylist');
groceryItems.forEach((item, i) => {
  let listElement = document.createElement('li')
  let text = document.createTextNode(item)
  listElement.appendChild(text)
  list.appendChild(listElement)
})
/* 2.) create an eventHandler to handle action for adding additonal items to the list */
//preventDefault is there so when you click on the add button, it doesn't add the
//same item you added twice unless you type it in again
//For #2, its pretty much the same code as the one above, except you are making it so
//when you click the sumbit button it adds the users new value

//Targets the submit button
let submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', (randomValue) => {
  randomValue.preventDefault()
  //newItem is g-item. Its what the user enters
  newItem = document.getElementById('g-item');
  listElement = document.createElement('li')
  //newItem.value, makes it so when the user types out their text, it shows up
  //in the list. Without "value" the function will only input the object
  // name and not the actual value the user adds in
  text = document.createTextNode(newItem.value)
  listElement.appendChild(text)
  list.appendChild(listElement)
})
/* 3.) Replace the 'eggs' with 'comic books' */
let listItems = document.getElementsByTagName('li');
let newListItem = document.createElement('li');
let gItem = document.createTextNode('comic books')
newListItem.appendChild(gItem);
let i = gItem.indexOf('eggs');
gItem[i] = 'comic books';

/* 4.) Change all list items to a blue color */


/* 5.)  Remove cookies from the list */



////////////// BONUS //////////////////////

/* 6.) add a new button and input to the form that deletes items from  the list one by one */




/* 7.)  Total the number on groceries on this and add it the page */
