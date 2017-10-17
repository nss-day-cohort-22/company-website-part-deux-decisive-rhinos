/* --Read data using JSON.parse-- */

//Create a constant named "storedSupplyInventory" to read data ("supplyInventory") in memory
const storedSupplyInventory = localStorage.getItem("supplyInventory")

//Create a variable named "supplies" to store the read data in "storedSupplyInventory"
let supplies = JSON.parse(storedSupplyInventory)

