function makeCart () {
    const cart = {
        "items": [],
        "supplies": [],
        "addOns": []
    }

    let cartString = JSON.stringify(cart)
    localStorage.setItem("cart", cartString)
}