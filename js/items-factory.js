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
    const rhino5 = {
        "name": "rhino-5",
        "price": 10,
    }
    const rhino6 = {
        "name": "rhino-6",
        "price": 10,
    }
    const rhino7 = {
        "name": "rhino-7",
        "price": 10,
    }
    const rhino8 = {
        "name": "rhino-8",
        "price": 10,
    }
    const rhino9 = {
        "name": "rhino-9",
        "price": 20,
    }
    const rhino10 = {
        "name": "rhino-10",
        "price": 20,
    }
    const rhino11 = {
        "name": "rhino-11",
        "price": 20,
    }
    const rhino12 = {
        "name": "rhino-12",
        "price": 20,
    }
    const rhino13 = {
        "name": "rhino-13",
        "price": 40,
    }
    const rhino14 = {
        "name": "rhino-14",
        "price": 40,
    }
    const rhino15 = {
        "name": "rhino-15",
        "price": 40,
    }
    const rhino16 = {
        "name": "rhino-16",
        "price": 40,
    }
    const rhino17 = {
        "name": "rhino-7",
        "price": 80,
    }
    const rhino18 = {
        "name": "rhino-18",
        "price": 80,
    }
    const rhino19 = {
        "name": "rhino-19",
        "price": 80,
    }
    const rhino20 = {
        "name": "rhino-20",
        "price": 80,
    }

    const description = {
        "items-description": "We will help you move a Rhinocerus Statue of any size. Just select the size and the number of statues you'd like to use below and we will help you."
    }

    // push each product item into an array of items
    productsArray.push(smallItem, mediumItem, largeItem, extraLargeItem, rhino5, rhino6, rhino7, rhino8, rhino9, rhino10, rhino11, rhino12, rhino13, rhino14, rhino15, rhino16, rhino17, rhino18, rhino19, rhino20 );
    // add the itemsArray to the items object
    itemsDatabase.products = productsArray;
    // add the description content to the items object
    itemsDatabase.description = description;

    // store items database in local storage
    let itemsDatabaseString = JSON.stringify(itemsDatabase);
    localStorage.setItem("itemsDatabaseString", itemsDatabaseString);

//} // end of else statement from checking if local storage exists, on or near line 6

