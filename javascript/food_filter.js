let menu = [
    "Paneer Tikka",
    "Chicken Tandoor",
    "Egg Fry",
    "Onion Uthapam",
    "Garlic Noodles",
    "Aloo Parantha"
]

function isVeg (food){
    if (food.toLowerCase().indexOf("chicken")!=-1)
    return false;

    if (food.toLowerCase().indexOf("egg")!=-1)
    return false;

    return true
}

function onionGarlicFree(food){
    if( food.toLowerCase().indexOf("onion") != -1 || food.toLowerCase().indexOf("garlic") != -1 )
    return false

    return true
}

let vegMenu = menu.filter(isVeg)
let jainMenu= menu.filter(isVeg).filter(onionGarlicFree)

console.log("VEG "+vegMenu)
console.log("JAIN "+jainMenu)
console.log("Menu "+ menu)