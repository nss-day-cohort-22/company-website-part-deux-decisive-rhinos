/* retreive index info from local storage */

let storedIndex = JSON.parse(localStorage.getItem("indexItems"))

/* Set marker for html injection */

let indexMarker = document.getElementById("indexId")

/* loop through arrays to get needed info for index page and inject html*/ 

for (let i = 0; i < storedIndex.length; i++) {
    let currentIndex = storedIndex[i]
    indexMarker.innerHTML += `<div class="${currentIndex.class}"><p>${currentIndex.title}</p>
    <button class="${currentIndex.subclass}" onclick="location.href = './items.html'">RHINO TIME</button></div>`
} 

