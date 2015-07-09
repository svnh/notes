function createArray() {
  var res = [];

  for(var i = 1; i < 101; i++) {
    res.push(i);
    res.push(i);
  }
  // remove one semi-random element
  res.splice(87, 1);

  return res;
};

function findMissingElement() {
  var doublesArray = createArray();
  var res = {};

  for (var i = 0; i < doublesArray.length; i++) {
    if(!res[doublesArray[i]]) {
      res[doublesArray[i]] = true;
    } else {
      delete res[doublesArray[i]];
    }
  };

  return Object.keys(res);
};

console.log(findMissingElement());
