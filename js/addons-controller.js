let storedAddOns = JSON.parse(localStorage.getItem("addOns"))

// Will populate the HTML starting from the element tag ID of options
let addOnTag = document.getElementById("options")

for (let addOnKey in storedAddOns) {

    const addOnType = storedAddOns[addOnKey]
    
    addOnTag.innerHTML += `
    <section class= "${addOnKey}">
        <h2>${addOnKey}</h2>
        <form action="">
        <ul>
        `
            for (let i=0; i < addOnType.length; i++) {
                let entry=addOnType[i];
                addOnTag.innerHTML += `
                    <input type="radio" name="insAdd" value="insValue"> ${entry} <br>
                `
            }
    addOnTag.innerHTML += `
        </form>
    </section>
    `          
}    