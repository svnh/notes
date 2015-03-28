> Most dynamic languages are designed in four parts that work in sequence: the lexer, the parser, the interpreter and the runtime. Each one transforms the input of its predecessor until the code is run.

### Lexer
The part of a language that converts the input, the code you want to execute, into tokens the parser can understand.

What the lexer does is split the code into atomic units (tokens) and tag each one with the type of token it contains.

Produces an array of tokens

### Parser
Produces an tree of nodes that represents what the code means to the language, commonly an Abstract Syntax Tree(AST).

Parser generators are commonly used to accomplish the otherwise tedious task of building a parser. A programming language needs a grammar to define its rules. The parser generator will convert this grammar into a parser that will compile lexer tokens into AST nodes.

### Runtime Model
The runtime model of a language is how we represent its objects, its methods, its types, its structure in memory. If the parser determines how you talk to the language, the runtime defines how the language behaves. Two languages could share the same parser but have different runtimes and be very different.
