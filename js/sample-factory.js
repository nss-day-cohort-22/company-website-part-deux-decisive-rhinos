//const cart = JSON.parse(localStorage.getItem("cart"));

//build shopping car

//const cartExists = JSON.parse(localStorage.getItem("cart")) !== null;
const cartExists = false;
    
if (cartExists){
    console.log("cart exists");
} else {

    const itemA = {
        "name": "Small Rhino",
        "price": 30,
        "qty": 7,
        "type": "item"
    }
    const itemB = {
        "name": "Med Rhino",
        "price": 75,
        "qty": 1,
        "type": "item"
    }
    

    const medPackingMaterial = {
        "name": "Med Packing Materials",
        "price": 100,
        "qty": 1,
        "type": "supply"
    }

    const mediumCrate = {
        "name": "Medium Crate",
        "price": 200,
        "qty": 1,
        "type": "supply"
    }

    const insurance = {
        "name": "Insurance: $250,000",
        "price": 300,
        "qty": 1,
        "type": "add-on"
    }

    const distance = {
        "name": "Distance: Within Davidson County",
        "price": 0,
        "qty": 1,
        "type": "add-on"
    }

    const items = [itemA, itemB];
    const supplies = [medPackingMaterial, mediumCrate];
    const addOns = [insurance, distance];

    const cart = {
        "items": items,
        "supplies": supplies,
        "addOns": addOns
    }

    let cartString = JSON.stringify(cart)
    localStorage.setItem("cart", cartString)

}

// Narrative Elements
const samplePageNarrative = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."

