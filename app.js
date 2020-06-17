var message = "Help me, Obi-wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = 'BB-88';
console.log("My favorite droid is " + favoriteDroid);
var isEnoughToBeatMF = function (parsec) {
    return parsec < 12;
};
var distance = 14;
console.log("Is " + distance + " parsec enought to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
