# Labels
Labels are defined as a pointer to wherever they're placed in the final binary.
All statics, constants, functions, loops, etc are essentially labels.

They begin with an identifier and end with `:`.
eg: `main:`

Labels may also be anonymous, ie. not include a name.
This can be used for a simple way to optain loops, match statements, or conditionals

if the label ends with the `()` or `{}` attribute, the `:` may be ommited.

## Calls and Returns
Calling an address pushes the current IP to the stack,
later whenever returning a word is popped from the stack and IP set to the value. 

use the `!` symbol to call an adress and the `ret` keyword to return, posibly with a value.
eg: `!print_hello`, `!0xdeadbeef`
eg: `ret`, `ret 20`

for external functions (ones not defined within the shard source) use the `$` operator,
syntactically identical to `!`, but doesnt provide any type checking, and is handled by the linker.

You may also jump directly to an adress using the `jmp` instruction.
This however, does not allow you to return to the point you jumped from.
eg: `jmp some_func`, `jmp 0xdeadbeef`

## Attributes
these are inserted after the identifier of a function/label.

Each attribute may also include a leading comma.
This bares no functional difference, short of possibly better readability.

eg: `main entry:` entry here is an attribute
  
> **entry**
    The program's entry point. Exclusive to one label.
  
> **{}** - body
    A scope containing any number of statemenets.  

> **@** - at
    Takes the next value. If its a literal use as the address of that label,
    if value starts with `.` treat it as a binary section, like `.rodata`
    `STATIC_VAR @ .data [1]: "Hello, World!"`  

> **()** - condition
    Run label if condition is met, otherwise ignore.
    IMPL: The condition is pre-checked for jumps
    eg: `(var = 20) $puts "var is 20"`  

> **loop**
    Requires **body**.
    Jump to itself at the end of scope.

> **def**
    Defines the following expr as macro `#`.
    eg:
    `do_thing def 20 {  `
    `    $printf "%d", #`
    `}                  `

> **||**
    Requires body.
    Applies all attributes between the `||` to all labels in the following scope.
    eg:
    `|@ .rodata| {       `
    `    CONST1: 8       `
    `    CONST2: 97      `
    `    CONST3: "Hi Mom"`
    `}                   `

> **once**
    Implicitly return after a single statement
    eg: `add once 4 a, 4b -> 4: a+b`

> **=>** - then
    Requires Body.
    Expects a following value.
    Executes that following block after current function returns.
    In case of the `loop` attr this is done before the final jump
    eg: 
    `%i 4                     `
    `loop (i < 10) => {'i ++}:`
    `    $printf "%d", i        `

> **argument**
    `TYPE IDENT`, make the label require an argument of that type when called.
    The argument will then be assigned to an identifier, by default stack allocated,
    if the type is a register instead register allocated.
    eg: `add 4 a, 4 b:` 

> **return**
    `-> TYPE`, mark the label as returning a value of TYPE. 
    Allowing `ret` to accept an argument.
    eg: `ten -> 1: ret 10`

The argument and return types act more as hints and convenience attributes
to the compiler and user, rather than as concerete rules.
It is possible to return values from a function that doesnt *state* it returns them,
or jump to a label with arguments it never intended to have.

This shows up as a compiler warning, as it's unstable and potentially the source of many bugs.
However as all compiler warnings it can be disabled.

