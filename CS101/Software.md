# Software

#### Software: code that runs on the hardware
#### Program: series of CPU (machine code) instructions
- Example: `pixel.setRed(10)`
  -To run, expanded to about 10 machine code instructions
- Each family of compatible CPUs (e.g. the very popular Intel x86 family) has its own, idiosyncratic machine code which is not compatible with the machine code of other CPU families

How does a software program run?
- Program is stored on hard drive
- Instructions are copied from hard drive to RAM
- CPU runs through instructions on RAM
  - CPU runs a "fetch/execute cycle": fetch one instruction in sequence, execute (run) that instruction, fetch the next instruction, and so on
- Start, end, and management of program, RAM allocation, etc are dictated by OS
  - OS keeps software programs separate so they don't interact with each other

Boot / Reboot
- Tiny 'getting started' program on hardware that looks for a disc that contains a OS to run
- Runs that OS

Computer languages
- "High level" features like loops, if-statements, strings (ex. C, C++, Javascript, Java)
- Programmer writes "source code" of a program in a language
- "Compiler" looks at the source code
- Compiler translates the source code into a large number of machine code instructions
  - Suppose a high level construct, like an if-statement, can be implemented by a sequence of 5 machine code instructions
  - e.g. Firefox: written in C++, compiler takes in Firefox C++ source code, produces Firefox.exe
- The compilation step can be done once and long before the program is run (e.g. produce Firefox.exe at Mozilla headquarters)
- The end user does not need to the source code or the compiler. Distribute the program.exe file in working form
- Does not work backwards -- having the .exe, you cannot recover the source code (well)

Dynamic (interpreter) Languages
- e.g. Java, Javascript, Python
- Can be implemented by an "interpreter", do not use the compiler/machine-code strategy
- Interpreter is a *program* which "runs" other code (e.g. web browsers includes a Javascript interpreter)
  -Browser "runs" bits of Javascript code in a web page, such as ours
- Interpreter looks at one line at a time, deconstructs what each line says to do, does that action, in the moment, then proceeds to the next line

Compiler vs Interpreter
- The compiler translates source code to equivalent machine code, producing a new machine code file
  - Compiled code runs faster
  - Partial memory management, some programmer input required
- The interpreter **does** the code, looking at each line and doing it
  - Greater number of programmer-friendly features, programmers can work more quickly
  - Automatic memory management, no programmer input needed (not free feature: spends CPU cycles to lighten programmer workload)

JIT Just In Time Compiler
- Compile code of a dynamic language on the fly
- All major browsers now have a JIT for the Javascript code they run (Chrome)
- Best of both worlds: flexibility of dynamic languages combined with most of the performance of the compiled world
