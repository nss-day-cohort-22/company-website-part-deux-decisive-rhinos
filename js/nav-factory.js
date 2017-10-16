let suppliesTab = {
    "title": "Supplies", 
    "link": "./supplies.html"
}

let itemsTab = {
    "title": "Items",
    "link": "./items.html"
}

let addonsTab = {
    "title": "Add Ons",
    "link": "addons.html"
}

let sampleTab = {
    "title": "Sample",
    "link": "sample.html"
}

let navArray =[itemsTab, suppliesTab, addonsTab, sampleTab]

let navString = JSON.stringify(navArray)
localStorage.setItem("navItems", navString)

