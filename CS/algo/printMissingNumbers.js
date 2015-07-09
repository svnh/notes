function printMissingNumbers(inputArr) {
  var index = 0;
  var res = [];
  var start = 0;
  var end = 0;
  for(var i = 0; i < 100; i++) {
    // if they're equal
    if(inputArr[index] && i === inputArr[index]) {
      //the endpoint = i - 1;
      end = i - 1;
      // add start to end to result
      res = start !== end ? res + start + '-' + end + ',' : res + start + ',';
    // if input array index is less
    } else if(inputArr[index] < i) {
      // input array index +=1;
      index = index + 1;
      // starting point is i
      start = i;
    } else if(i === 99) {
      res = res + start + '-' + 99 + ',';
    }
  }
  res = res.substring(0, res.length - 1);
  return res;
}

console.log(printMissingNumbers([]));
console.log(printMissingNumbers([1, 55, 88, 99]));
console.log(printMissingNumbers([1, 5, 38, 90]));
