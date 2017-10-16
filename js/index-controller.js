let storedIndex = JSON.parse(localStorage.getItem("indexItems"))

let indexMarker = document.getElementById("indexId")

for (let i = 0; i < storedIndex.length; i++) {
    let currentIndex = storedIndex[i]
    indexMarker.innerHTML += `<div id="index"><p>${currentIndex.title}</p>
    <p>${currentIndex.extra}</p></div>`
} 