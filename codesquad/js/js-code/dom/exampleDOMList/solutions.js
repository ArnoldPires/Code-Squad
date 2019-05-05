let groceryItems = ['eggs', 'waffles', 'steak', 'chicken', 'steak', 'applejuice', 'cookies', 'cake', 'cheese', 'ham'];

/* Your Code Below */


/* 1.) add items from arry above to list on page */

const list = document.getElementById('grocery-list');

groceryItems.forEach((item, i) => {
    let listElement = document.createElement('li')
    let text = document.createTextNode(item)

    listElement.appendChild(text)
    list.appendChild(listElement)
})

/* 2.) create an eventHandler to handle action for adding additonal items to the list */
let submitBtn = document.getElementById('submit')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let newItem = document.getElementById('g-item');

    let listElement = document.createElement('li')
    let text = document.createTextNode(newItem.value)

    listElement.appendChild(text)
    list.appendChild(listElement)
    newItem.value = ''
})

/* 3.) Replace the 'eggs' with 'comic books' */

let listItems = document.getElementsByTagName('li');
let newListItem = document.createElement('li');
let gItem = document.createTextNode('comic books')
newListItem.appendChild(gItem);

for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === 'eggs') {
        list.replaceChild(newListItem, listItems[i])
    }
}

console.log(newListItem)

/* 4.) Change all list items to a blue color */

console.log(listItems.length)
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = 'blue';
}

/* 5.)  Remove cookies from the list */

for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].innerText === 'cookies') {
        list.removeChild(listItems[i]);
    }
}
console.log(listItems.length)

////////////// BONUS //////////////////////

/* 6.) add a new button and input to the form that deletes items from  the list one by one */



let removeBtn = document.getElementById('r-submit')
removeBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let inputName = document.getElementById('r-item').value

    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].innerText === inputName) {
            list.removeChild(listItems[i]);
        }
    }

    inputName.value = '';

})

/* 7.)  Total the number on groceries on this and add it the page */

let totalBtn = document.getElementById('getTotal')

totalBtn.addEventListener('click', () => {
    let itemCount = document.getElementById('itemCount')
    itemCount.innerHTML = listItems.length;
})


console.log(listItems)

