// define Insurance options
const insurance = [
    "$50,000 total value     ADD    $50",
    "$100,000 total value     ADD   $100",
    "$250,000 total value     ADD   $250",
    "$500,000 total value     ADD   $500",
    "$1,000,000 total value     ADD $1,000"
]

const distance = [
    "within Davidson county     ADD   $500",
    "adjacent county     ADD   $750",
    "non-adjacent county within Tennessee     ADD $1,000"
]

// populate the addOns database with the arrays
const addOns = {
    "Insurance":      insurance,
    "Distance":       distance,
}

// convert addOns database into string saved in browser memory
const addOnsString = JSON.stringify(addOns)
localStorage.setItem("addOns", addOnsString)
