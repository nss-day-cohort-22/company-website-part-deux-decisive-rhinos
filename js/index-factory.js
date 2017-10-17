let infoButton = {
    "title": "Let us move your Rhinos Statues with Rhinos, Today",
    "extra": "<button>Start the Party</button>",
    "class": "buttonBox",
    "subclass": "buttonStyle" 
}

let aboutSection = {
    "title": "Seriously are you ready to move bro?",
    "extra": "Because we GOT you!",
    "class": "aboutBox",
    "subclass": "aboutStyle"
}

let indexObjects = [infoButton, aboutSection]

let indexString = JSON.stringify(indexObjects)
localStorage.setItem("indexItems", indexString)