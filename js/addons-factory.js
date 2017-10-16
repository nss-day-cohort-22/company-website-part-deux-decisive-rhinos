// define Insurance options
const insurance = [
    "$50,000 total value",
    "$100,000 total value",
    "$250,000 total value",
    "$500,000 total value",
    "$1,000,000 total value"
]

const distance = [
    "within Davidson county",
    "adjacent county",
    "non-adjacent county within Tennessee"
]

// populate the addOns database with the arrays
const addOns = {
    "Insurance":      insurance,
    "Distance":       distance,
}

// convert addOns database into string saved in browser memory
const addOnsString = JSON.stringify(addOns)
localStorage.setItem("addOns", addOnsString)
