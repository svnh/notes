# Big O Notation and Time Complexity
> A way to measure how well an algorithm scales as the amount of data involved increases by looking at the part of the algorithm that will have the largest effect. Run time increases with complexity.

### Resources
[Big O Cheat Sheet](http://bigocheatsheet.com/)
[Big O Notations Video](https://www.youtube.com/watch?v=V6mKVRU1evU)
[O (log N) Explanation](http://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly)
[Big O Lecture Notes](http://www.cs.cmu.edu/~adamchik/15-121/lectures/Algorithmic%20Complexity/complexity.html)
[Amortized Complexity](http://stackoverflow.com/questions/15079327/amortized-complexity-in-laymans-terms)

### Constant 0(1)
Algorithm will execute in the same amount of time no matter the amount of data
- Example: adding an item to the end of an array

### Logarithmic 0(log n)
Data being used is decreased roughly by 50% each time through the algorithm.

The most common attributes of logarithmic running-time function are that:
- the choice of the next element on which to perform some action is one of several possibilities, and
- only one will need to be chosen

- Example: binary search
- Example: looking up people in a phone book. You do not need to look at every single person in the book, use a divide and conquer method. However, a bigger phone book will still take you a longer time, but it won't grow as quickly as the proportional increase in the additional size.
  - Given a person's name, find the phone number by picking a random point about halfway through the part of the book you haven't searched yet, then checking to see whether the person's name is at that point. Then repeat the process about halfway through the part of the book where the person's name lies. (This is a binary search for a person's name.)

### Linear 0(n)
Time to complete grows in direct proportion to the amount of data
- Example: Linear search of an array -- to find the value we are looking for we will have to look at exactly each item in the array
    - This is the same if we are finding all values that equal a target or just the first one because BigO describes the worst possible case

### Quadratic 0(n^2)
Time to complete is equal to the square of the amount of data
- Example: bubble sort -- compare every adjacent pair in a list and swap their position if they are not in the correct order

### Exponential 0(x^n)
For every possibility try every combination
- Example: trying to break a password by testing every possible combination (assuming numerical password of length N)
