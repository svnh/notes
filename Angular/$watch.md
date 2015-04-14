Event listener -- call $watch() with an expression to observe and a callback that gets invoked whenever that expression changes

Example:
```javascript
function RainController($scope) {
   $scope.rain = {
     raindrops: 0,
     raining: false
   };

   addRaindrop = function() {
      $scope.rain.raindrops = $scope.rain.raindrops + 5;
   };

   $scope.$watch('raindrops.raining', addRaindrop);
};
```

Notes: the expression to watch is a string, which is evaluated as an Angular expression. These can do simple operations and have access to the properties in the $scope object.
