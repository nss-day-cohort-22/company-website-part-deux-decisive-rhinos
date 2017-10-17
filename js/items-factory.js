// check to see if itemsDatabaseString already exists in local Storage

if (localStorage.getItem("itemsDatabaseString") !== null) {
  // let items-controller.js file handle database that already exists    
} 
else {
    // generate new items database

    const items = {};
    const itemsArray = [];

    const smallItem = {
        "name": "small",
        "price": 30,
        "picture": "/images/Rhino_small_web.jpg"
    }

    const mediumItem = {
        "name": "medium",
        "price": 75,
        "picture": "/images/Rhino_med_web.jpg"
    }

    const largeItem = {
        "name": "large",
        "price": 250,
        "picture": "/images/Rhino_large_web.jpg"
    }
    const extraLargeItem = {
        "name": "XL",
        "price": 1500,
        "picture": "/images/Rhino_xl_web.jpg"
    }

    const description = {
        "items-description": "We will help you move a Rhinocerus Statue of any size. Just select the size and the number of statues you'd like to use below and we will help you."
    }

    // push each product item into an array of items
    itemsArray.push(smallItem, mediumItem, largeItem, extraLargeItem);
    // add the itemsArray to the items object
    items.items = itemsArray;
    // add the description content to the items object
    items.description = description;

    // store items database in local storage
    let itemsString = JSON.stringify(items);
    localStorage.setItem("itemsString", itemsString);

} // end of else statement from checking if local storage exists, on or near line 6

