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



// Created a new array for priceFilter variable's items between $14 and $18  
var arr = [];


// Return array with items with prices between $14 and $18
var range = items.filter( function (item) {
  if (item.price > 14 && item.price < 18) {
    return arr.push(item.title);
  };
});


// Return items
  var answer2a = document.querySelector('#answer2a');
  var textNode = document.createTextNode(arr[0]);
  answer2a.appendChild(textNode);

  var answer2b = document.querySelector('#answer2b');
  var textNode = document.createTextNode(arr[1]);
  answer2b.appendChild(textNode);

  var answer2c = document.querySelector('#answer2c');
  var textNode = document.createTextNode(arr[2]);
  answer2c.appendChild(textNode);








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






//Display a list of all items who are made of wood.
  //Question 4

// Run filter of function to return items containing wood  
var madeOfWood = items.filter(function (item) {
    if (item.materials.indexOf('wood') !== -1 )
      return true;
  });
console.log(madeOfWood);

// Map titles of items made of wood
var titleOfWood = madeOfWood.map( function (item) {
    return item.title;
  });
  console.log(titleOfWood);

// Return list of titles of items made of wood
  var answer4a = document.querySelector('#answer4a');
  var textNode = document.createTextNode(titleOfWood[0]);
  answer4a.appendChild(textNode);
  var answer4b = document.querySelector('#answer4b');
  var textNode = document.createTextNode(titleOfWood[1]);
  answer4b.appendChild(textNode);
  var answer4c = document.querySelector('#answer4c');
  var textNode = document.createTextNode(titleOfWood[2]);
  answer4c.appendChild(textNode);
  var answer4d = document.querySelector('#answer4d');
  var textNode = document.createTextNode(titleOfWood[3]);
  answer4d.appendChild(textNode);
  var answer4e = document.querySelector('#answer4e');
  var textNode = document.createTextNode(titleOfWood[4]);
  answer4e.appendChild(textNode);

//5  Display the name, number of items and the items it is made of.

var materialsList = [];

// Find items with more than eight materials

var findEight = items.filter(function(z){
  var mats = z.materials;
  if (mats.length >= 8) {
    return materialsList.push(z);
  };
  return materialsList;
});


// Get name and number of materials on page
materialsList.forEach(function(nameNumber){
  var answer5 = document.querySelector('#answer5');
  var textNode = document.createTextNode(nameNumber.title + ' has ' + nameNumber.materials.length + ' materials:');
  var linebreak = document.createElement('br');
  answer5.appendChild(textNode);
  answer5.appendChild(linebreak);
  
// Get list of materials on page
  nameNumber.materials.forEach(function(madeOf){
  var answer5a = document.querySelector('#answer5');
  var textNode = document.createTextNode(madeOf);
  var linebreak2 = document.createElement('br');
  answer5.appendChild(textNode);
  answer5.appendChild(linebreak2);
  });
});



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