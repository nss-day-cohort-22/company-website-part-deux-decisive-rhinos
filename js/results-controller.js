// check for cart and redirect to home page if it doesn't exist
const cart = JSON.parse(localStorage.getItem("cart"));

//total up the cart

// Place order button that clears the cart once it is 

// update the tables on the page

let updateTablesOnPage = function() {
    // this is the function that you want to run
    for (let key in cart) {
        const currObj = cart[key];
    
    //caption, element, array, id, classes
    generateTable({"caption": getCaption(key),
                    "element": key, // property
                    "array": currObj, // array of objects
                    "id": key, //name of id you want to put on there
                    "classes": "red", // class you want to put on there
                    "footerTotal": "$15"});

    }
}

let getCaption = function(key) {
    // create the caption
    let caption = key;
    switch (key) {
        case "items":
            caption = "Items"
            break;
        case "supplies":
            caption = "Supplies"
            break;
        case "addOns":
            caption = "Add-ons"
            break;
        default:
            caption = key;
            break;
    }
    return caption;
}

updateTablesOnPage();