
var cards = ["queen", "queen", "king", "king"]

var cardsInPlay = []


var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if(cardsInPlay.length === 2) {
	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	} else {
		alert("Sorry, try again.");
	}
};
