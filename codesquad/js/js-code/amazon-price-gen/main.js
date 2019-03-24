let itemName = prompt("What is the name of the item?");
let price = prompt("What is the base price?");
let blackFriday = prompt('Is today "Black Friday"?');
let searchEngine = prompt("Did you find this product using a search engine?(Google, Bing, Yahoo, etc)");
let priceElsewhere = prompt("Have you compared your prices elsewhere?");
let message = ('');
let finalPrice = ('');
  if (searchEngine === "yes") {
message = message + "The purchaser came through a search engine, so we will increase the price by 1%. ";
finalPrice = finalPrice * 1.01;
};






//When the user enters the page, they will be prompted with a few questions
//The first question askes for the name of the item
//Second question askes for the price
//The price should be saved because it will be changed depending on the answers of the rest of the questions
//Next, if the user says yes to the black friday question, minus the price by 25%
//If the user used a search engine, increase the price by 1%
//If the user did comparison shopping reduce the price by 10%
//Add everything together and show the user the final result 
