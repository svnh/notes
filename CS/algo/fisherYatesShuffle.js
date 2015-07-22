var getRandom = function(num) {
  return Math.floor(Math.random() * num);
};

var shuffle = function(arr) {
  if(arr.length < 1) return arr;

  var rand, temp;

  for(var i = 0; i < arr.length; i++) {
    rand = getRandom(arr.length);
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

console.log(shuffle([0,1,2,3,4]))
