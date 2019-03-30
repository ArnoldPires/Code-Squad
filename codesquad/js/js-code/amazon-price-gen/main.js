let itemName = prompt("What is the name of the item?");
let price = prompt("What is the base price?");
let blackFriday = prompt('Is today "Black Friday"? Type Yes or No');
  if (blackFriday === 'yes') {
    alert("Happy Black Friday! Item is now 25% off!");
    price = price - (price * .25);
  }else if (blackFriday === 'no') {
    alert("Since it isn't Black Friday, normal rates apply");
  }
  alert('The base price for ' + itemName + ' is' + ' $' + price);
let searchEngine = prompt("Did you find this product using a search engine?(Google, Bing, Yahoo, etc) Type Yes or No");
  if (searchEngine === 'yes') {
    alert('This purchaser came through a search engine, so we will increase the price by 1%');
    price = price + (price * .1);
  }else if (searchEngine === 'no') {
    alert('No search engine result, price remains the same');
  }
  alert('The base price for ' + itemName + ' is' + ' $' + price);
let priceElsewhere = prompt("Have you compared your prices elsewhere? Type Yes or No");
  if (priceElsewhere === 'yes') {
    alert('This purchaser is a comparison shopper, so we will reduce the price by 10%');
    price = price - (price * .10);
  }else if (priceElsewhere === 'no') {
    alert("No comparison's have been made, price remains the same")
  }
  alert('The final price is ' + ' $' + price);






//When the user enters the page, they will be prompted with a few questions
//The first question askes for the name of the item
//Second question askes for the price
//The price should be saved because it will be changed depending on the answers of the rest of the questions
//Next, if the user says yes to the black friday question, minus the price by 25%
//If the user used a search engine, increase the price by 1%
//If the user did comparison shopping reduce the price by 10%
//Add everything together and show the user the final result
