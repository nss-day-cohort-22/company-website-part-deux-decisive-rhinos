let suppliesTab = {
    "title": "Supplies", 
    "link": "./supplies.html",
    "css": "suppliesClass"
}

let itemsTab = {
    "title": "Items",
    "link": "./items.html",
    "css": "itemsClass"
}

let addonsTab = {
    "title": "Add Ons",
    "link": "addons.html",
    "css": "addonsClass"
}

let sampleTab = {
    "title": "Sample",
    "link": "sample.html",
    "css": "sampleClass"
}

let navArray =[itemsTab, suppliesTab, addonsTab, sampleTab]

let navString = JSON.stringify(navArray)
localStorage.setItem("navItems", navString)

