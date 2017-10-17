// retrieve database from local storage
const retrievedItems = JSON.parse(localStorage.getItem("itemsString"));

// console log the database for structure reference and to check it was properly retrieved
// console.log(retrievedItems);

// get control of container elements in items.html and assign to variables
let itemsHeaderEl = document.getElementById("items-header");
let itemContentEl = document.getElementById("item-content");

// function to capatilize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// post description to article tag in html doc, one time, so no loop.
itemsHeaderEl.innerHTML += `
    <h1> What Size Rhinocerus Statue Do You Need to Move?</h1>
    <p>${retrievedItems.description["items-description"]}</p>
`


// loop through array of product items
let itemsArray = retrievedItems.items;

for (var i = 0; i < itemsArray.length; i++) {
    var item = itemsArray[i];
    
    // setting html code to push into the items-content container
    itemContentEl.innerHTML += `
    <article class="item">
    <a href="${item.picture}" target="_blank" alt="${item.name} Rhino sculpture"><img src="${item.picture}" width="300" class="shadow"></a>
    <p>${capitalizeFirstLetter(item.name)} item:
    <input type="number" name="${item.name}-item" size="4" class="num-input" id="${item.name}-item-quantity">
    <button class=button id="${item.name}-item">Add to Cart</button>
    </p>
    <p>Price: $${item.price}</p>
    </article>
    `   
}


















// Old code from when coding buttons to send data to shopping cart object
/*

// get number info from text box on items.html via document.getElementById("") 

// create a .onclick() function to push the items and quantity to cart database

let smallItemEl = document.getElementById("small-item");
let smallItemAmountEl = document.getElementById("small-item-quantity");
let mediumItemAmountEl = document.getElementById("medium-item-quantity");
let largeItemAmountEl = document.getElementById("large-item-quantity");


smallItemEl.onclick = function() {addToCart(smallItemAmountEl)};
mediumItemEl.onclick = function() {addToCart(mediumItemAmountEl)};
largeItemEl.onclick = function() {addToCart(largeItemAmountEl)};

function addToCart(itemQuantity) {
    
    console.log(itemquantity.value)
}
*/