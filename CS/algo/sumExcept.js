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

var sumExcept = function(nums) {
  var num = 1;

  for(var i = 0; i < nums.length; i++) {
    num = num * nums[i];
  }

  for(var i = 0; i < nums.length; i++) {
    nums[i] = num / nums[i];
  }

  return nums;
};

var sumExcept = function(nums) {
  var right = [];
  var left = [];
  var output = [];
  var jsum = 1;
  var isum = 1;
  var r, j;

  for(var i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    jsum = jsum * nums[j];
    isum = isum * nums[i];
    right[i] = isum;
    left[j] = jsum;
  }

  for(var i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    r = right[i - 1] ? right[i - 1] : 1;
    l = left[i + 1] ? left[i + 1] : 1;
    output[i] = r * l;
  }

  return output;
};

console.log(sumExcept([1, 2, 3, 4, 5]));
