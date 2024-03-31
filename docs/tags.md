# Macros
Not tags, but they're both related and comptime.

Macros may be invoked using the `#` operator.
eg: `#HELLO`, `#FILE`, `#hi`

And defined using `/`
eg: `/HELLO "hello, world"`

There also exist so called *transparent macros*,
there are not explicitly shown, and instead mostly derived from tags.


# Tags
Tags are used to change the behaviour of the compiler, 
and allow for defining the architecture.

An **M** after tag in this list signifies that it's value may be envoked
using a macro with the same name (all caps)
eg: `#NAME`


> **name** M
    Filename for the output binary, and project/lib ident
    eg: `:name my_program`

> **arch** M
    Architecture to use.
    eg: `:arch x86_64 linux`

> **version** M
    Project version, merely visual
    eg: `:version 2.0.1`

> **nostd**
    Dont use any std functions/types/&c, only parse tags.
    eg: `:nostd`

> **dep** ~~future~~
    Pull a shard lib from the given repo
    eg: `:dep git://example.com/some_good_shard_lib`

> **use**
    Import another source code file.
    eg: `:use utils.shd`

> **lib** ~~concept~~
    Add an external library, automatically setting linker flags.
    eg: `:lib libssh2`

> **linker** M
    Set linker
    eg: `:linker ld`, `:linker #LINKER -lc`

> **assembler** M
    Set assembler
    eg: `:assembler as`

> **sharc**
    Set additional flags to run **sharc** with
    eg: `sharc -l d`

> **verb**
    Define a **sharc** verb, like `sharc run`.
    Setting name to DEFAULT, will cause it to be used when no verb is given.
    eg:
    `:verb run /bin/sh {`
    `   sharc #FILE       `
    `   chmod +x #NAME    `
    `   ./#NAME           `
    `}                  `

> **nowarn**
    Disable warnings
    eg: `:nowarn`

> **noasm**
    Dont assemble
    eg: `:noasm`

> **WORD** M
    Set word size to a value
    eg: `:WORD 8`

> **ATTR**
    Transparently macro for attributes
    eg: `:ATTR "static" "@ .data"`

> **REG**
    Transparent macro for registers
    eg: `:REG r0 "rax"`

> **SYSCALL_ADDR**
    Interrupt adress used for syscalls
    eg: `:SYSCALL_ADDR 0x80`

> **SYSCALL_CONV**
    Calling convention for syscalls
    eg: `:SYSCALL_CONV r0, r5, r4, r3, r10, r9, r8 -> r0`

> **SYSCALL**
    Define name, args, and return for a syscall
    eg: 
    `:SYSCALL write {       `
    `    = 0x01               `
    `    4 "File Descriptor"`
    `    [1] "Buffer"         `
    `    #WORD "Buffer Size"`
    `}                      `

> **STR_ENC**
    Changes the encoding used for strings (default: ext-ascii)
    eg: `:STR_ENC parity-ascii`
    
> **DEF_ENC**
    Define a custom encoding
    eg:
    `:DEF_ENC my_scii { `
    `   &#96;a&#96; 1             `
    `   &#96;b&#96; 2             `
    `}                  `

> **STR_TERM**
    Implicitly terminate string literals with value
    eg: `:STR_TERM 0`

**TO BE CONTINUED**
