// check to see if itemsDatabaseString already exists in local Storage

// if (localStorage.getItem("itemsDatabaseString") !== null) {
//   // let items-controller.js file handle database that already exists    
// } 
// else {
//     // generate new items database

    const itemsDatabase = {};
    const productsArray = [];

    const smallItem = {
        "name": "small",
        "price": 30,
    }

    const mediumItem = {
        "name": "medium",
        "price": 75,
    }

    const largeItem = {
        "name": "large",
        "price": 250,
    }
    const extraLargeItem = {
        "name": "XL",
        "price": 1500,
    }

    const description = {
        "items-description": "We will help you move a Rhinocerus Statue of any size. Just select the size and the number of statues you'd like to use below and we will help you."
    }

    // push each product item into an array of items
    productsArray.push(smallItem, mediumItem, largeItem, extraLargeItem);
    // add the itemsArray to the items object
    itemsDatabase.products = productsArray;
    // add the description content to the items object
    itemsDatabase.description = description;

    // store items database in local storage
    let itemsDatabaseString = JSON.stringify(itemsDatabase);
    localStorage.setItem("itemsDatabaseString", itemsDatabaseString);

//} // end of else statement from checking if local storage exists, on or near line 6

