Notes from: http://shaffner.us/cs/papers/tarpit.pdf

#### State and Control

##### Testing
- “From the complexity comes the difficulty of enumerating, much less understanding, all the possible states of the program, and from that comes the unreliability”
- "The key problem is that a test (of any kind) on a system or component that is in one particular state tells you nothing at all about the behaviour of that system or component when it happens to be in another state."
- "Concurrency also affects testing, for in this case, we can no longer even be assured of result consistency when repeating tests on a system — even if we somehow ensure a consistent starting state. Running a test in the presence of concurrency with a known initial state and set of inputs tells you nothing at all about what will happen the next time you run that very same test with the very same inputs and the very same starting state... and things can’t really get any worse than that."

##### Reasoning
- "In addition to causing problems for understanding a system from the outside, state also hinders the developer who must attempt to reason (most commonly on an informal basis) about the expected behaviour of the system “from the inside”. The mental processes which are used to do this informal reasoning often revolve around a case-by-case mental simulation of behaviour: “if this variable is in this state, then this will happen — which is correct — otherwise that will happen — which is also correct”. As the number of states — and hence the number of possible scenarios that must be considered — grows, the effectiveness of this mental approach buckles almost as quickly as testing (it does achieve some advantage through abstraction over sets of similar values which can be seen to be treated identically)"
- "When a programmer is forced (through use of a language with implicit control flow) to specify the control, he or she is being forced to specify an aspect of how the system should work (imperative programming) rather than simply what is desired. Effectively they are being forced to over-specify the problem." Inputs/outputs rather than details.
  - "an artificial ordering is being imposed, and then further work is done to remove it"
  - Sidebar (https://en.wikipedia.org/wiki/Imperative_programming): "Imperative programming is a programming paradigm that describes computation in terms of statements that change a program state. Imperative programs define sequences of commands for the computer to perform... focused on describing how a program operates. The term is often used in contrast to declarative programming, which focuses on what the program should accomplish without prescribing how to do it in terms of sequences of actions to be taken."
- Code complexity is managed by state and control: volume of code should increase in a linear way with introduction of logic

##### Principles
- Complexity breeds complexity:  complexity introduced as a result of not being able to clearly understand a system
- Simplicity is hard: takes significant effort, external pressures hinder effort
- Power corrupts: the more powerful a language, the more that is possible within it, the harder it is to understand systems constructed in it

#### Managing Complexity

##### Object Oriented Programming
- "object-oriented programming (OOP) an object is seen as
consisting of some state together with a set of procedures for accessing and manipulating that state."
  - "the idea of encapsulation allows the programmer to enforce integrity constraints over an object’s state by regulating access to that state through the access procedures (“methods”)"
- "Object identity does make sense when objects are used to provide a (mutable) stateful abstraction — because two distinct stateful objects can be mutated to contain different state even if their attributes (the contained state) happen initially to be the same... However, in other situations where mutability is not required... the OOP approach is forced to adopt techniques such as the creation of “Value Objects”, and an attempt is made to de-emphasise the original intensional concept of object identity and re-introduce extensional identity ... all forms of OOP rely on state (contained within objects) and in general all behaviour is affected by this state"
   - Value Objects (https://en.wikipedia.org/wiki/Value_object): "a small object that represents a simple entity whose equality is not based on identity: i.e. two value objects are equal when they have the same value, not necessarily being the same object"
- Sidebar (http://plato.stanford.edu/entries/logic-intensional/): Intended vs extensional meaning: morning star and evening star -- designate the same object, but have different intended meanings
  - Intensional: intended meaning (connotations)
  - Extensional: designated meaning (objects)

