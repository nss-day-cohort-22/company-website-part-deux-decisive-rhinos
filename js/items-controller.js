// retrieve database from local storage
const retrievedItemsDatabase = JSON.parse(localStorage.getItem("itemsDatabaseString"));

// console log the database for structure reference and to check it was properly retrieved
console.log(retrievedItemsDatabase);

// get control of container elements in items.html and assign to variables
let itemsHeaderEl = document.getElementById("items-header");
let itemContentEl = document.getElementById("item-content");
let productGroup1 = document.getElementById("group1");
let productGroup2 = document.getElementById("group2");
let productGroup3 = document.getElementById("group3");
let productGroup4 = document.getElementById("group4");
let productGroup5 = document.getElementById("group5");


// function to capatilize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// post description to article tag in html doc, one time, so no loop.
itemsHeaderEl.innerHTML += `
    <h1> What Size Rhinocerus Statue Do You Need to Move?</h1>
    <p>${retrievedItemsDatabase.description["items-description"]}</p>
`



// loop through array of product items
let arrayOfProducts = retrievedItemsDatabase.products;

for (let i = 0; i < arrayOfProducts.length; i++) {
    let product = arrayOfProducts[i];
    
    // setting html code to push into the items-content container
    // Making if/else statements to divide the group of 20 products into groups of 4, placed in separate html containers

    if (i >= 0 && i <= 3) {
    productGroup1.innerHTML += `
    <article class="item">
    ${capitalizeFirstLetter(product.name)}:
    <p>Price: $${product.price}</p>
    <input type="number" name="${product.name}-item" size="4" class="num-input" id="${product.name}-item-quantity">
    <button class=button id="${product.name}-item">Add to Cart</button>
    </article>
    `   
    }
    else if (i >= 4 && i <= 7) {
    productGroup2.innerHTML += `
    <article class="item">
    ${capitalizeFirstLetter(product.name)}:
    <p>Price: $${product.price}</p>
    <input type="number" name="${product.name}-item" size="4" class="num-input" id="${product.name}-item-quantity">
    <button class=button id="${product.name}-item">Add to Cart</button>
    </article>
    `   
    }
    else if (i >= 8 && i <= 11) {
    productGroup3.innerHTML += `
    <article class="item">
    ${capitalizeFirstLetter(product.name)}:
    <p>Price: $${product.price}</p>
    <input type="number" name="${product.name}-item" size="4" class="num-input" id="${product.name}-item-quantity">
    <button class=button id="${product.name}-item">Add to Cart</button>
    </article>
    `   
    }
    else if (i >= 12 && i <= 15) {
    productGroup4.innerHTML += `
    <article class="item">
    ${capitalizeFirstLetter(product.name)}:
    <p>Price: $${product.price}</p>
    <input type="number" name="${product.name}-item" size="4" class="num-input" id="${product.name}-item-quantity">
    <button class=button id="${product.name}-item">Add to Cart</button>
    </article>
    `   
    }
    else if (i >= 16 && i <= 20) {
    productGroup5.innerHTML += `
    <article class="item">
    ${capitalizeFirstLetter(product.name)}:
    <p>Price: $${product.price}</p>
    <input type="number" name="${product.name}-item" size="4" class="num-input" id="${product.name}-item-quantity">
    <button class=button id="${product.name}-item">Add to Cart</button>
    </article>
    `   
    }

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