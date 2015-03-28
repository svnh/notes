### Ruby
-everything is an object

### class-based:
- The first way a prototype in JavaScript is different from a class in Ruby is that the prototype is an ordinary object with exactly the same properties that we expect to find in an instance
- JS: any object can be a prototype
- "Classes" are objects in most "classical" languages, but they are a special kind of object. In JavaScript, prototypes are not a special kind of object, they're just objects
- A class in a formal classist language can be an object, but it's a special kind of object with special properties and methods. It is responsible for creating new instances and for defining the behaviour of instances.
- Instance behaviour in a classist language is defined with special syntax. If changes are allowed dynamically, they are done with special syntax and/or special methods invoked on the class.
- JavaScript splits the responsibility for instances into a constructor and a prototype. A constructor in JavaScript can be any function. Constructors are responible for creating new instances.
- A prototype in JavaScript can be any object. Prototypes are responsible for defining the behaviour of instances. prototypes don't have special methods or properties.
- Instance behaviour in JavaScript is defined by modifying the prototype directly, e.g. by adding functions to it as properties. There is no special syntax for defining a class or modifying a class.

### Lexer
- Creates a stream of tokens
  - ex. splitting a sentence into words and then tagging each with a type
- Use regex


### Parse
- Feed a string of tokens and then spits out a tree of nodes which is how the language is stored in memory
- Types
  - context free: http://en.wikipedia.org/wiki/Parsing#Types_of_parser
    - LR(1) //number of tokens it will fetch in advance, if there is a conflict like if more than one rule can apply, it will fetch another token and resolve the conflict
    - LALR(1) //look ahead
    - LL(1)
    - PEG: slower and not full support for an entire language, good for smaller
- Either:
  - Shift: take one token and puts it onto the stack
    - Always starts with shift
  - Reduce as far as possible and then put onto stack

### Operator precedence
- Associativity: (left or right) whether it should start parsing from L to R or R to L

### Runtime
- Runtime: the environment in which your objects are created
  - Think of it as a big box where you put your objects
  - These objects contain the class and ruby value
    - This ruby value is different than the value itself
  - Context: local variables, tree value itself
    - Methods evaluate in context

### Interpreter
- Walks across the tree of nodes and interprets each
- Local variable: stored in current context of evaluation

### Overview
- To create a new rule: create token, add new rule, add rule to expression if necessary, create new node in nodes.rb,
- Create in interpreter.rb, modify runtime to define new method
- To create a new operator: create in runtime.rb and make sure that it is in precedence table
