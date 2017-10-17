let storedIndex = JSON.parse(localStorage.getItem("indexItems"))

let indexMarker = document.getElementById("indexId")

for (let i = 0; i < storedIndex.length; i++) {
    let currentIndex = storedIndex[i]
    indexMarker.innerHTML += `<div class="${currentIndex.class}"><p>${currentIndex.title}</p>
    <button class="${currentIndex.subclass}" onclick="${currentIndex.extra};">RHINO TIME</button></div>`
} 