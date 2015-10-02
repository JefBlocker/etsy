(function () {

  //Show me how to calculate the average price of all items.

  //// Create an array of just the prices
  //var prices = items.map( function (item) {
  //  return item.price;
  //});
  //console.log(prices);

  // Add all of the prices together
  //var sum = prices.reduce( function (prev, next) {
  //  return prev + next;
  //});
  //console.log(sum);

  // Divide by total number of items
  //var avg = sum / prices.length;
  //console.log(avg);

  // Convert it to 2 decimal places
  //var converted = avg.toFixed(2);
  //console.log(converted);

  // Make it a string
  //var str = 'The average price is $' + converted;
  //console.log(str);


  // Make it show up on the page

    // Find our answer element
  //var answer1 = document.querySelector('#answer1');
    // Create a node from our above answer ready for the DOM
  //var textNode = document.createTextNode(str);
    // Append newly created node to our answer element
  //answer1.appendChild(textNode);

//// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD


// Filter items with price betwen 14.00 and 18.00
//var range = items.filter(function(title) {
 // return title.price > 14.00 && title.price < 18.00;
 //});
 // console.log(range);

   // Make it a string
  //var str = range;
  //console.log(str);

    // Find our answer element
  //var answer2 = document.querySelector('#answer2');
    // Create a node from our above answer ready for the DOM
  //var textNode = document.createTextNode(str);
    // Append newly created node to our answer element
  //answer2.appendChild(textNode);


///// 3. Which item has a "GBP" currency code? Display it's name and price.
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18


// Filter item with GBP currency_code.
 //var range = items.filter(function(item) {
 //  return item.currency_code === "GBP";
  //});
  //console.log(range);

// Make it a string
 //var str =  items.title + ' &#163'items.price;
 //console.log(str);
 //&pound;

///// 4. Display a list of all items who are made of wood.
///// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.

///// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.

///// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.

///// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.

///// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

// Use forEach function to evaluate items based upon "materials" that mention "wood"

//var range = items.forEach(function(item) {
// return (item.materials === "wood");
//})

// Make it a string
//var str = range + ' is made of wood.'
// console.log(str);

    // Find our answer element
//  var answer5 = document.querySelector('#answer5');
    // Create a node from our above answer ready for the DOM
//  var textNode = document.createTextNode(str);
    // Append newly created node to our answer element
 // answer5.appendChild(textNode);

///// 5.Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

/////Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
// wall mount bottle opener
// wedding
// man cave
// christmas gift
// guy gift
// fathers day
// home bar
// beer
// bar

// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:

// glass
// sandblast cabinet
// vinyl
// beer glass
// pint glass
// etched pint glass
// etched glass
// etched beer glass
// 16 oz pint
// beer gift
// etched harry potter glass
// the three broomsticks glass
// personalized harry potter glass




///// 6. How many items were made by their sellers?
///// 18 were made by their sellers

//// Create an array with reduce function to determine how many items were made by their sellers.

// Determine number of items with "who_made": "i did"


var iMade = items.filter(function(x) {
  return (x.who_made === "i_did");
});
console.log(iMade.length);

// Make it a string
var str = iMade.length + ' were made by their sellers.';
console.log(str);

  // Make it show up on the page

    // Find our answer element
  var answer6 = document.querySelector('#answer6');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(str);
    // Append newly created node to our answer element
  answer6.appendChild(textNode);

}());



