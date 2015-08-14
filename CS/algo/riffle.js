var makeDeck = function makeDeck() {
  var nums = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 'jack', 'kween', 'king', 'ace'];
  var suits = ['spades', 'clubs', 'diamonds', 'hearts'];
  var cards = [];
  for(var i = 0; i < suits.length; i++) {
    for(var j = 0; j < nums.length; j++) {
      cards.push(nums[j] + ' of ' + suits[i])
    }
  }

  return cards;
}

var shuffle = function subroutine(half1, half2, shuffled) {
  shuffled = shuffled || [];
  // Grab a random number of cards from the top of half1 (could be 0, must be less than or equal to the number of cards left in half1) and throw them into the shuffled_deck
  if(half1.length) {
    var end = Math.ceil(Math.random() * half1.length);
    var start = Math.ceil(Math.random() * (half1.length - end));
    shuffled.push(half1.splice(start, end));
  }

  // Grab a random number of cards from the top of half2 (could be 0, must be less than or equal to the number of cards left in half2) and throw them into the shuffled_deck
  if(half2.length) {
    var end = Math.ceil(Math.random() * half2.length);
    var start = Math.ceil(Math.random() * (half2.length - end));
    shuffled.push(half2.splice(start, end));
  }

  // Repeat steps 2-3 until half1 and half2 are empty.
  if(half1.length || half2.length) {
    subroutine(half1, half2, shuffled);
  }

  return shuffled;
}

var flatten = function flatten(arr, flatteded) {
  flatteded = flatteded || [];

  for(var i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'object') {
      flatteded.concat(flatten(arr[i], flatteded));
    } else {
      flatteded.push(arr[i]);
    }
  }

  return flatteded;
}

var riffle = function riffle() {
  // Cut the deck into halves half1 and half2
  var half2 = makeDeck();
  var half1 = half2.splice(0, half2.length / 2);

  var shuffled = shuffle(half1, half2);
  return flatten(shuffled);
}

console.log(riffle());
