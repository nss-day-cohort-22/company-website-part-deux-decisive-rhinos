//Create const named "supplyElement" to print supplies to the website.  The computer creates an empty array, therefore the index should start at [0] to ensure the file is read starting at the initial dom element created.  In this case, the class name "supplyInventory" I created on supplies.html
const supplyElement = document.getElementsByClassName("supplyInventory")[0];

/* --Start read data using JSON.parse-- */

//Create a constant named "storedSupplyInventory" to read data ("supplyInventory") in memory
const storedSupplyInventory = localStorage.getItem("supplyInventory")

//Create a variable named "supplies" to store the read data in "storedSupplyInventory"
let supplyObject = JSON.parse(storedSupplyInventory)

/* --End read data using JSON.parse-- */

//Create a "for in" loop to 
for(let key in supplyObject) {

    console.log(key + ": " + supplyObject[key].length);

    let length = supplyObject[key].length;

    for(i = 0; i < length; i++){

        let currentSupply = supplyObject[key][i];

        supplyElement.innerHTML += currentSupply.name;

    }

}


