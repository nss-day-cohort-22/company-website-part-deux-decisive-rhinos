// Populate the nav-bar

let storedNav = JSON.parse(localStorage.getItem("navItems"))

let navMarker = document.getElementById("nav")

for (let i = 0; i < storedNav.length; i++) {
    let currentTab = storedNav[i]
    if (true) {
            navMarker.innerHTML += `<li>${storedNav[i]}</li>`
    }
}


// check for cart and redirect to home page if it doesn't exist

const cart = JSON.parse(localStorage.getItem("cart"));
//total up the cart

const getTotals = function(category) {
    const subTotals = [];
    let total = 0;
    let publishSubTotal = 0;
    
    for (let key in cart) {
        let subTotal = 0;
        let currCategory = cart[key];
        
        for (let i = 0; i < currCategory.length; i++) {
            let currItem = currCategory[i];
                subTotal += currItem.qty * currItem.price;
        }
        subTotals.push({"category": key, "subTotal": subTotal});
        total += subTotal;
    }

    return {"subTotals": subTotals, "total": total};
}

// Place order button that clears the cart once it is 

// update the tables on the page

let updateTablesOnPage = function() {
    // this is the function that you want to run
    for (let key in cart) {
        const currObj = cart[key];
        
        let subTotal = 0;
        let calcSubTotal = function() {
            const totals = getTotals();
            for (let i = 0; i < totals.subTotals.length; i++) {
                let sub = totals.subTotals[i];
                if (sub.category === key) {
                    return sub.subTotal;
                }
            }
        }
        subTotal = calcSubTotal();
    //caption, element, array, id, classes
    generateTable({"caption": getCaption(key),
                    "element": key, // property
                    "array": currObj, // array of objects
                    "id": key, //name of id you want to put on there
                    "classes": "red", // class you want to put on there
                    "footerTotal": subTotal});

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

let provideFeedback = function() {
    alert("input button is working");
}

let calcTotal = () => {
    const totals = getTotals();
    return totals.total;
};

updateTablesOnPage();
let updateNarrative = (function(){
    document.getElementById("sample-move-narrative").innerHTML = samplePageNarrative;
}()); 
document.getElementById("table-move-total").innerHTML = "$" + calcTotal();
