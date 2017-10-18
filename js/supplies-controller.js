//Create const named "supplyElement" to print html elements to the website.  The computer creates an empty array, therefore the index should start at [0] to ensure the file is read starting at the initial dom element created.  In this case, the class name is "supplyInventory" which I created on supplies.html
const supplyElement = document.getElementsByClassName("supplyInventory")[0];

/* --Start read data using JSON.parse-- */

//Create a constant named "storedSupplyInventory" to read data ("supplyInventory") in memory
const storedSupplyInventory = localStorage.getItem("supplyInventory")

//Create a variable named "supplyObject" to store the read data in "storedSupplyInventory"
let supplyObject = JSON.parse(storedSupplyInventory)

/* --End read data using JSON.parse-- */

//Create a "for in" loop to iterate thru the keys of the object stored in the variable "supplyObject"
for(let key in supplyObject) {

    //This tests that the loop is reading the correct keys
    console.log(key + ": " + supplyObject[key]);

    //Define variable length because I didn't want to keep typing all that code
    let length = supplyObject[key].length;

    //Create a for loop nested within the "for in" loop to cycle through the multiple arrays held within the object "supplyObject"
    for(i = 0; i < length; i++) {

        //Create a variable named "currentSupply" that stores all property and property values of each array within the object "supplyObject"
        let currentSupply = supplyObject[key][i];

        //This code appends additional html to the constant named "supplyElement" created earlier. The initial "+=" is necessary to loop thru all items in a property
        supplyElement.innerHTML += `
            <div class='product-grid'>
            <img src='${currentSupply.image}' style= 'width:200px; height:200px;' >
            <div class='name'> ${currentSupply.name} </div>
            <div class='info'> $${currentSupply.price} 
            <input type='submit' value='Add to Cart'> 
            </div>
            </div>
        `;


    }

}


