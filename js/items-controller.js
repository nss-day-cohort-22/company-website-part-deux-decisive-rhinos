const retrievedItems = JSON.parse(localStorage.getItem("itemsString"));
console.log(retrievedItems);
console.log(retrievedItems.description["items-description"])

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




// loop through array of items
let itemsArray = retrievedItems.items;

for (var i = 0; i < itemsArray.length; i++) {
    var item = itemsArray[i];
    
    // setting html code to push into the items-viewer container
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