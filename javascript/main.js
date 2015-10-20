(function () {

  //Show me how to calculate the average price of all items.

  //// Create an array of just the prices
  var prices = items.map( function (item) {
    return item.price;
  });
  console.log(prices);

  // Add all of the prices together
  var sum = prices.reduce( function (prev, next) {
    return prev + next;
  });
  console.log(sum);

  // Divide by total number of items
  var avg = sum / prices.length;
  console.log(avg);

  // Convert it to 2 decimal places
  var converted = avg.toFixed(2);
  console.log(converted);

  // Make it a string
  var str = 'The average price is $' + converted;
  console.log(str);


  // Make it show up on the page

    // Find our answer element
  var answer1 = document.querySelector('#answer1');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(str);
    // Append newly created node to our answer element
  answer1.appendChild(textNode);

//// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD


// Filter items with price betwen 14.00 and 18.00
var range = items.filter(function(item) {
  return item.price > 14.00 && item.price < 18.00;
  return item.title;
 });
  console.log(range);

   // Make it a string
  var str = range;
  console.log(str);

    // Find our answer element
  var answer2 = document.querySelector('#answer2');
    // Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(str);
    // Append newly created node to our answer element
  answer2.appendChild(textNode);


///// 3. Which item has a "GBP" currency code? Display it's name and price.
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18


// Filter item with GBP currency_code.
 var range = items.filter(function(item) {
   return item.currency_code === "GBP";
  });
  console.log(range);

  var title = range.map(function(a) {return a.title;});
    console.log(title);

  var price = range.map(function(b) {return b.price;});
    console.log(price);
// Make it a string
  var str = title + ' \xA3' + price;
  console.log(str);
 //&pound;

     // Find our answer element
   var answer3 = document.querySelector('#answer3');
    // Create a node from our above answer ready for the DOM
   var textNode = document.createTextNode(str);
    // Append newly created node to our answer element
   answer3.appendChild(textNode);

///// 4. Display a list of all items who are made of wood.
///// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.

///// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.

///// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.

///// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.

///// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

// Use forEach function to evaluate items based upon "materials" that mention "wood"

//var madeOf = items.indexOf(function(item) {
 // item.materials.indexOf("wood") is not -1
//});
//console.log(madeOf);

// Determine which items have value of "wood" in the "materials" object array
//var x = items.filter(function(item) {
//   if (item.materials === "wood") 
//   return title;
//   }); 
//   console.log(x);

//I need to pull the titles for the the items that have the value of "wood" in the "materials" object array   
//var y = materials.indexOf("wood") is not -1 {
//  return title;
//};

// Make it a string
// var str = y + ' is made of wood.'
// console.log(str);

    // Find our answer element
//  var answer4 = document.querySelector('#answer4');
    // Create a node from our above answer ready for the DOM
//  var textNode = document.createTextNode(str);
    // Append newly created node to our answer element
//  answer4.appendChild(textNode);

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

// Filter items and return items consisting of eight or more materials
var eightMoreMat = items.filter( function(item) {
  return item.materials.length >= 8;
});

console.log(eightMoreMat);

// Query document and find element with id #answer5
var answer5 = document.querySelector('#answer5');

// Iterate through items made of eight or more materials
eightMoreMat.forEach( function(item) {
  
  // create p element in #answer5 and add text with title, # of materials, and list of materials.
  var para = document.createElement('p');
  para.textContent = item.title + 'has ' + item.materials.length + ' materials';
  answer5.appendChild(para);

  console.log(item.materials.length);

item.materials.forEach( function (itemMaterial) {
  var textNode = document.createTextNode(itemMaterial);

});

});

//var range = items.filter(function(item) {
//  return item.materials.length >= 8;
//});
//console.log(range);

//range.forEach(function(item) {
//  item.quantity;
//  item.title;

//var div = document.createElement('div');
//div.textContent = item.title;
//var body = document.querySelector('body');
//body.appendChild(div);
//});

// Filter items with price betwen 14.00 and 18.00
//var description = range.map(function(item) {
 // return item.title;
 // });
 // console.log(description);

//var quantity = eightPlus.quantity;
//console.log(quantity);

//var title = eightPlus.title;
//console.log(title);

//var str = range;
//console.log(str);

// Make it a string
//var str = 'Qty of ' + eightPlus.quantity + eightPlus.title + ' has' + eightPlus.materials + ' materials.';
//console.log(str);

    // Find our answer element
  //var answer5 = document.querySelector('#answer5');
    // Create a node from our above answer ready for the DOM
  //var textNode = document.createTextNode(str);
    // Append newly created node to our answer element
  //answer5.appendChild(textNode);


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



