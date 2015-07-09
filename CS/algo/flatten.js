function flatten(array, result) {
  result = result || [];

  for(var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      flatten(array[i], result);
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(flatten([[[0, [1]]], [2, 3], [4, 5]]));
