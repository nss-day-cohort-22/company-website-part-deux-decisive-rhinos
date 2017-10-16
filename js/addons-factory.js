// define the entries for the addons
const addons = {
    "name": addonsName,
    "price": addonsPrice,
    "quantity": addonsQuantity
}

// populate addons database with enties
addons.push()

// convert addons database into string saved in browser memory
const addonsString = JSON.stringify(addons)
localStorage.setItem("addons", addonsString)
