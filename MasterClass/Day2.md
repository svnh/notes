### Virtual Machine: virtual representation of physical machine
- Python, Ruby, PHP use because they are 'dynamic languages'
  - it is easier to compile in a VM than it is in Machine Code because each processor has a different language
  -the chrome v8 engine compiles directly to machine code
    -they have a compiler for each processor language
- The interpreter for the machine code is the machine itself, the interpreter is the silicon chip and there is no software layer between. Machine code is directly in memory, the lowest level.
- C language compiles directly to machine code
- Java compiles to Java Bite code, not directly to machine code

### Compiler
- Yesterday we used an interpreter instead of a compiler, today we are reopening classes and creating a compiler to make the link between the tree of nodes and code generator (slide 8)
- Why do you need a compiler?
  - After you parse language you have a tree of node; this takes up too much space in memory.
  - Going down the tree one node at a time is not efficient
  - CoffeeScript is a compiler: it compiles to JS

### Byte-code: low level instruction set for interpreter
- A series of bytes
- One operation is an instruction
- The opcode is the type of instruction
- Operands are like arguments
  - Ex. storing local var takes 2 bytes of memory vs ruby takes at least 10-20 bytes

### Literal Table: create memory storage for local variable names so you can lookup and not create multiple times
- Because a byte has a maximum value of 255 you can use literal table to store larger values

### VM: two types
- Stack based: simpler, more flexible
  - Implements registers with a stack
- Register based: faster because it generates fewer instructions
  - Each instruction explicitly names the specific registers to use for operand and result values (same as how the physical machine stores)

### Garbage Collection
- http://furious-waterfall-55.heroku.com/ruby-guide/internals/gc.html#introduction
- Memory leak: program keeps growing without garbage collection
  - You should always give back the memory that you use in any program
- To execute GC means detecting unused regions in memory and freeing the memory held by these regions

#### GC Algorithms:
1. Reference counting: count the number of times that you reference an object
  1. Ex. if an item is added to an array and then removed the counter is incremented and the decremented and once it reaches zero it is freed from memory
1. Mark and sweep:
  1. mark: scans the heap and marks all of the objects that are being used by other objects, takes all of the remaining that have not been marked and erases them from memory. Disadvantage: fragmentation if you remove something so you need to restructure. The bigger the heap is the longer this takes and it sometimes freezes up the program while is scans all of heap
1. Generational: the older the object is the less likely it needs to be freed at some point
  1. Mark and sweep occurs, and the longer it survives it is moved into a survival space, then old space, then permanent. Ensures that you are not sweeping the entire heap every time. Ex. you do not ever need to garbage collect classes so they should be permanent
