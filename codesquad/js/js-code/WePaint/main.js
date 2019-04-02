let paintCost = 15;
let taxCost = paintCost + (paintCost * .7);
let firstName = prompt('Enter your first name');
let lastName = prompt('Enter your last name');
let streetAddress = prompt('Enter your street address');
let city = prompt('Enter city name');
let width = prompt('Enter width of wall to be painted');
let height = prompt('Enter height of wall to be painted');
let sqaureFeet = width * height;
let cansOfPaint =  sqaureFeet/175;
let premiumPaint = prompt('Do you want premium paint? Type yes or no (Comes as an extra cost)');
  if (premiumPaint === 'yes') {
    paintCost = 20;
  }
alert('The final price for painting your wall is $'+ paintCost + taxCost + cansOfPaint + sqaureFeet);
