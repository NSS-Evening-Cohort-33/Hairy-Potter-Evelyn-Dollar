
import { makePottery } from "./PotteryWheel.js"

import { firePottery } from "./kiln.js"

import { toSellOrNotToSell } from "./PotteryCatalog.js"



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

toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedPlate)
toSellOrNotToSell(firedPlanter)



import {PotteryList} from "./PotteryList.js"
console.log(PotteryList())

const potteryListContainer = document.querySelector(".potteryList")
potteryListContainer.innerHTML = PotteryList()

