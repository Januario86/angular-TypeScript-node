let message:string = "Help me, Obi-wan Kenobi. You're my only hope!"
console.log(message)

let episode:number = 4
console.log("This is episode " + 4)
episode = episode + 1 
console.log("Next episode is " + episode)

let favoriteDroid:string
favoriteDroid = 'BB-88'

console.log("My favorite droid is " + favoriteDroid)

let isEnoughToBeatMF = function(parsec: number):boolean{
    return parsec <12
}

let distance = 14
console.log(`Is ${distance} parsec enought to beat Millennium Falcon? ${isEnoughToBeatMF(distance)?'YES':'NO'}`)