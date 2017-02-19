// Deck constructor
function Deck() {
  this.buildDeck();
}
Deck.prototype.buildDeck = function(){
  var suits = ['diamonds','clubs','spades','hearts']
  var values = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
  var self  = this;

  this.cards = [];
  // when invoked, populate deck with cards
  suits.forEach(function(suit){
    values.forEach(function(value){
      self.cards.push(new Card(value,suit));
    });
  });
  return this;
};
Deck.prototype.shuffle = function(){
  var m = this.cards.length, t, i;
  // while there remains elements to shuffle...
  while(m){
    // pick a remaining element...
    i = Math.floor(Math.random()*m--);
    // and swap it with the current element
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }
  return this;
};
Deck.prototype.deal = function(){
  // if length of cards is not 0 than return pop a card either return null
  return (this.cards.length > 0 ) ? this.cards.pop(): null;
}
Deck.prototype.reset = function () {
  // reset the deck and make a shuffle
  this.buildDeck().shuffle();
};
// Card constructor
function Card(value, suit) {
  this.value = value
  this.suit = suit
}
// Player constructor
function Player(name) {
  this.name = name;
  this.hand = [];
}
Player.prototype.takeCard = function(deck){
  // take a card
  this.hand.push(deck.deal());
  return this;
};
Player.prototype.discard = function(cardIndex){
  // discard a card
  if(this.hand.length > cardIndex){
    this.hand.splice(cardIndex,1);
  }
  return this;
};
var myDeck = new Deck();
myDeck.shuffle();
var player = new Player("Dhurki");
player.takeCard(myDeck);
player.takeCard(myDeck);
player.takeCard(myDeck);
console.log(myDeck.cards.length);
console.log(player.hand);
player.discard(0);
console.log(player.hand);
console.log(myDeck.cards.length);
