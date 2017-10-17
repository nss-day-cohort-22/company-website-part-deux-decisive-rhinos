//Define objects for the supply database

const smallCrate = {
    //Define properties of the object
    "name": "Small Shipping Crate", //created name/value pair
    "type": "crates",
    "price": 100,
    "image": "images/smallCrate.jpg"
}

const mediumCrate = {
    "name": "Medium Shipping Crate",
    "type": "crates",
    "price": 200,
    "image": "images/mediumCrate.jpg"
}

const largeCrate = {
    "name": "Large Shipping Crate",
    "type": "crates",
    "price": 300,
    "image": "images/largeCrate.jpg"
}

const smallPackMat = {
    "name": "Small Packing Materials",
    "type": "packingMaterials",
    "price": 50,
    "image": "images/packMaterials.jpg"
}

const medPackMat = {
    "name": "Medium Packing Materials",
    "type": "packingMaterials",
    "price": 100,
    "image": "images/packMaterials.jpg"
}

const largePackMat = {
    "name": "Large Packing Materials",
    "type": "packingMaterials",
    "price": 150,
    "image": "images/packMaterials.jpg"
}


//Define array for each type identified

let packingMaterials = []
let crates = []

//Place each object into the appropriate array

packingMaterials.push(largePackMat)
packingMaterials.push(medPackMat)
packingMaterials.push(smallPackMat)

crates.push(largeCrate)
crates.push(mediumCrate)
crates.push(smallCrate)

//Create a database object that stores all data type arrays

let SupplyInventory = {
    "Materials": packingMaterials,
    "Crates": crates
}


/* --Store data using JSON.stringify-- */

//Create a constant named "supplyInventoryString" to create the string of data for storage
const supplyInventoryString = JSON.stringify(SupplyInventory)
localStorage.setItem("supplyInventory", supplyInventoryString)


