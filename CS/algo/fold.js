function findFold(list) {
  for(var i = 0; i < list.length; i++) {
    if(list[i] > list[i + 1]) return i + 1;
  }

  return 0;
}

console.log(findFold([14, 17, 3, 6, 8, 9]));
console.log(findFold([1, 2, 3, 4, 5]));
console.log(findFold([]));

function binaryFindFold(list, start, end) {
  var end = end || list.length - 1;
  var start = start || 0;
  var pivot = Math.floor((start + end) / 2) ;

  if((end - start) === 1) {
    return end;
  }

  if(list[start] > list[pivot]) {
    return binaryFindFold(list, start, pivot)
  } else if(list[pivot] > list[end]) {
    return binaryFindFold(list, pivot, end)
  }

  return 0;
}

console.log(binaryFindFold([14, 17, 3, 6, 8, 9]));
console.log(binaryFindFold([1, 2, 3, 4, 5]));
console.log(binaryFindFold([]));
