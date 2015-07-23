var sumExcept = function(nums) {
  var output = [];
  var num;

  for(var i = 0; i < nums.length; i++) {
    num = 1;
    for(var j = 0; j < nums.length; j++) {
      if(j !== i) {
          num = num * nums[j];
      }
    }
    output.push(num);
  }

  return output;
};

console.log(sumExcept([1,2,3,4]));
