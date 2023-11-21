// Make a pop up/form, seperated by comas, of what types of froyo they would like to order
let request = prompt("Please type your froyo order here, make sure to use comas")
//Tested: Worked

// Turn the answers that were entered into the prompt be turned into an array
let froyoOrder = request.split(",");
// console.log(froyoOrder) Tested: Worked

// create an area (object) to store your answers
let orderInput = {};

// Now we need our array to be looped through to count the items
for (let flavor of froyoOrder){
// console.log(orderImput) Tested: Output "object" but not the imput as "flavors isnt declared"
flavor = flavor.trim(",");


// Counts inputted items and returns answer
orderInput[flavor] = (orderInput[flavor] || 0) + 1;
}

//console.log to call your loop/function
console.log("Froyo Order Summary:");
Object.keys(orderInput).forEach(flavor => {
    console.log(`${flavor}: ${orderInput[flavor]}`);
});

