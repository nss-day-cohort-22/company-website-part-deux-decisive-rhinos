let infoButton = {
    "title": "Let us move your Rhinos, Today",
    "extra": "buttonfunction1()",
    "class": "buttonBox",
    "subclass": "buttonStyle" 
}

let aboutSection = {
    "title": "Seriously are you ready to move bro?",
    "extra": "buttonfunction2()",
    "class": "aboutBox",
    "subclass": "aboutStyle"
}

let indexObjects = [infoButton, aboutSection]

let indexString = JSON.stringify(indexObjects)
localStorage.setItem("indexItems", indexString)