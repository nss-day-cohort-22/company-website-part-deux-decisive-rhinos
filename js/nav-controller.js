let storedNav = JSON.parse(localStorage.getItem("navItems"))

let navMarker = document.getElementById("nav")

for (let i = 0; i > storedNav.length; i++) {
    let currentTab = storedNav[i]
    if (document.getElementById("home") != undefined) {
        if (storedNav[i] === "Supplies" ) {
            navMarker.innerHTML += `<li>${storedNav[i]}</li>`
        }
    }
}
