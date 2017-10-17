//
const supplyElement = document.getElementsByClassName("supplyInventory")[0];

/* --Read data using JSON.parse-- */

//Create a constant named "storedSupplyInventory" to read data ("supplyInventory") in memory
const storedSupplyInventory = localStorage.getItem("supplyInventory")

//Create a variable named "supplies" to store the read data in "storedSupplyInventory"
let supplyObject = JSON.parse(storedSupplyInventory)


//Create a 

for(let key in supplyObject) {

    console.log(key + ": " + supplyObject[key].length);

    let length = supplyObject[key].length;

    for(i = 0; i < length; i++){

        let currentSupply = supplyObject[key][i];

        supplyElement.innerHTML += currentSupply.name;

    }

}


