if (localStorage.getItem("itemsDatabaseString") === null) {
  // let items-controller.js file handle database that already exists    
   
} 
else {
    // generate new items database

    const items = {};

    const smallItem = {
        "name": "small",
        "price": 30,
    }

    const mediumItem = {
        "name": "medium",
        "price": 60,
    }

    const largeItem = {
        "name": "large",
        "price": 100,
    }

    items.smallItem = smallItem;
    items.mediumItem = mediumItem;
    items.largeItem = largeItem;

    // store items database in local storage
    let itemsString = JSON.stringify(items);
    localStorage.setItem("itemsDatabaseString", itemsDatabaseString);

}


// if (localStorage.getItem("cart") === null) {
//     window.location = "http://localhost:8080/";
// }

