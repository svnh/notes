Notes from: http://shaffner.us/cs/papers/tarpit.pdf

#### State
##### Testing
- “From the complexity comes the difficulty of enumerating, much
less understanding, all the possible states of the program, and
from that comes the unreliability”
- "The key problem is that a test (of any kind) on a system or component that is in one
particular state tells you nothing at all about the behaviour of that system
or component when it happens to be in another state."

##### Reasoning
- "In addition to causing problems for understanding a system from the outside,
state also hinders the developer who must attempt to reason (most
commonly on an informal basis) about the expected behaviour of the system
“from the inside”.
The mental processes which are used to do this informal reasoning often
revolve around a case-by-case mental simulation of behaviour: “if this variable
is in this state, then this will happen — which is correct — otherwise
that will happen — which is also correct”. As the number of states — and
hence the number of possible scenarios that must be considered — grows,
the effectiveness of this mental approach buckles almost as quickly as test-
7
ing (it does achieve some advantage through abstraction over sets of similar
values which can be seen to be treated identically)"
