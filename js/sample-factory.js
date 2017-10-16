//const cart = JSON.parse(localStorage.getItem("cart"));

//build shopping car
//const cartExists = JSON.parse(localStorage.getItem("cart")) !== null;
const cartExists = false;
    
if (cartExists){
    console.log("cart exists");
} else {

    const itemA = {
        "name": "MovingItemA",
        "price": 10,
        "qty": 1,
        "type": "item"
    }
    const itemB = {
        "name": "MovingItemB",
        "price": 10,
        "qty": 1,
        "type": "item"
    }
    const itemC = {
        "name": "MovingItemC",
        "price": 10,
        "qty": 1,
        "type": "item"
    }

    const supplyA = {
        "name": "SupplyA",
        "price": 20,
        "qty": 1,
        "type": "supply"
    }

    const supplyB = {
        "name": "SupplyB",
        "price": 20,
        "qty": 1,
        "type": "supply"
    }

    const addOnA = {
        "name": "Add-onA",
        "price": 30,
        "qty": 1,
        "type": "add-on"
    }


    const items = [itemA, itemB, itemC];
    const supplies = [supplyA, supplyB];
    const addOns = [addOnA];

    const cart = {
        "items": items,
        "supplies": supplies,
        "addOns": addOns
    }

    let cartString = JSON.stringify(cart)
    localStorage.setItem("cart", cartString)

}


