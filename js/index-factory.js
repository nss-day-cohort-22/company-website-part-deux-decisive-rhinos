let infoButton = {
    "title": "Prepare to Git Wrecked By Rhinos",
    "extra": "I'm Not Kidding"
}

let aboutSection = {
    "title": "Seriously are you ready to move bro?",
    "extra": "Because we GOT you!"
}

let indexObjects = [infoButton, aboutSection]

let indexString = JSON.stringify(indexObjects)
localStorage.setItem("indexItems", indexString)