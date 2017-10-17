// Populate the nav bar
// let storedNav = JSON.parse(localStorage.getItem("navItems"))
// let navMarker = document.getElementById("nav")

// for (let i = 0; i < storedNav.length; i++) {
//     let currentTab = storedNav[i]
//     navMarker.innerHTML += `<li><a href="${currentTab.link}">${currentTab.title}</a></li>`

// }

// check for cart and redirect to home page if it doesn't exist
const cart = JSON.parse(localStorage.getItem("cart"));

/* 
    getTotals 
    return: an object with a subtotal array and a total value
          the total value will 
    loops through the cart to total up each category and track
    a global total
*/          
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

/*
    run this function to loop through the cart object
    and update the tables
*/ 


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
            caption = "Items To Move"
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

// a way to gather the totals and only pull the totals piece
let calcTotal = () => {
    const totals = getTotals();
    return totals.total;
};

// ------ execution section -------
updateTablesOnPage();

// updates the narrative portion of the 
let updateNarrative = (function(){
    document.getElementById("sample-move-narrative").innerHTML = samplePageNarrative;
}());

// update the total section
document.getElementById("table-move-total").innerHTML = "$" + calcTotal();
