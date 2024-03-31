# Opertions

## List of Operators
- `*`  - Multiplication
- `/`  - Division
- `%`  - Modulo
- `-`  - Subtraction
- `+`  - Addition
- `>>` - Right shift
- `<<` - Left shift
- `<=` - Less than equal
- `>=` - Greater than equal
- `<`  - Less than
- `>`  - Greater than
- `=` -  Equal
- `~=` - Not equal
- `&`  - Bitwise AND
- `^`  - Bitwise XOR
- `|`  - Bitwise OR
- `&&` - Logical AND
- `^^` - Logical XOR
- `||` - Logical AND
- `:`  - Swap

- `++` - Increment
- `--` - Decrement
- `~`  - Logical NOT
- `~~` - Bitwise NOT

- `?`  - size of


## Mutation
To change a value in-place use the `'` operator.
It accepts an ident, operator, and optionally another ident (for binary operations)
eg: `'IDENT OP ?EXPR`, `'counter ++`, `'var * 2`

Whenever a binary op is used and the second value is missing,
both of the arguments for that op will become the value.
eg: `'var +`


## Special Operators

> **=>**
    Used for basically *piping* the return of one expr as the *first* argument of the following expr
    eg: 
    `!add 2, 4       `
    `   => !print_int`

> **=>>**
    Same as before, but instead it inserts the return as the *last* argument
    eg: `!multiply 3, 8 =>> $printf "%d"`
