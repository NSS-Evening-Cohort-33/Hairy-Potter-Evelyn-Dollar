
import { makePottery } from "./PotteryWheel.js"

import { firePottery } from "./kiln.js"



let mug = makePottery("Mug", 3, 6)
let bowl = makePottery("Bowl", 5, 4)
let vase = makePottery("Vase", 7, 10)
let plate = makePottery("Plate", 4, 2)
let planter = makePottery("Planter", 8, 7)




let firedMug = firePottery(mug, 2100)
let firedBowl = firePottery(bowl, 2150)
let firedVase = firePottery(vase, 2300)
let firedPlate = firePottery(plate, 2200)
let firedPlanter = firePottery(planter, 2050)


console.log(firedMug)
console.log(firedBowl)
console.log(firedVase)
console.log(firedPlate)
console.log(firedPlanter)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

