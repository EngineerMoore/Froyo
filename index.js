/* Create a prompt where users list out froyo flavors seperated by commas 
Ex. "vanilla,vanilla,vanilla,strawberry,coffee,coffee."*/
const userInput = prompt( `Please enter your desired flavors. Be sure to seperate each flavor using commas`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`)

// Seperate the input into an array of strings
const ordersRaw = userInput.split(`,`);
// console.log(ordersRaw)

ordersRaw.sort()
// console.log(ordersRaw)

const flavorOneArray = []
const flavorOneIndex = 0
let flavorOne = ordersRaw[0];
for (let i = 0; ordersRaw[i]===flavorOne; i++){{flavorOneArray.push(ordersRaw[i])}}
console.log(flavorOneArray) 

const flavorTwoArray = []
const flavorTwoIndex = flavorOneIndex + flavorOneArray.length;
const flavorTwo = ordersRaw[flavorTwoIndex];
for (let i = 0; i < ordersRaw.length; i++)
  {if (ordersRaw[i]===flavorTwo)
     {flavorTwoArray.push(ordersRaw[flavorTwoIndex])}
  }
console.log(flavorTwoArray)

const flavorThreeArray = []
const flavorThreeIndex = flavorTwoIndex + flavorTwoArray.length;
const flavorThree = ordersRaw[flavorThreeIndex]
for (let i = 0; i < ordersRaw.length; i++)
{if (ordersRaw[i]===flavorThree)
{flavorThreeArray.push(ordersRaw[flavorThreeIndex])}
}
console.log(flavorThreeArray)




const froyoOrders = {
  vanilla: flavorThreeArray.length,
  stawberry: flavorTwoArray.length,
  coffee: flavorOneArray.length
  }

  console.log(froyoOrders)


  







       