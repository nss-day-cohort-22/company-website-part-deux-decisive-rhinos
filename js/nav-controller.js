let storedNav = JSON.parse(localStorage.getItem("navItems"))
let navMarker = document.getElementById("nav")

for (let i = 0; i < storedNav.length; i++) {
    let currentTab = storedNav[i]
    navMarker.innerHTML += `<li class="${currentTab.css}"><a href="${currentTab.link}">${currentTab.title}</a></li>`
    console.log(currentTab.title) 
}

