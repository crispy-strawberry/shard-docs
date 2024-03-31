# Memory 

## Stack
`%` allocates a variable on the stack. Type annotation is required.
eg: `%IDENT TYPE`, `%var 4`

A value may also be specified at assignment time:
eg: `%IDENT TYPE = EXPR`, `%var 4 = 35`


You may also directly insert data to the stack without associating a value with it using the `^` operator.
As with variable allocation the type is again required. 
eg: `^VALUE TYPE`, `^8 1`

Similarly it's possible to use the `_` operator to pop values from the stack.
This evaluates to a value which can be assigned.
eg: `_VALUE`, `_8`, `_var`


## Registers
Use `;` to alias a register to a variable name, setting its value in the process.
eg: `;IDENT REGISTER = EXPR`, `;twenty r0 = 20`


## Pointers and Indexing
Any expression wrapped in `[]` is dereferenced.
eg: `[EXPR]`, `[0xdeadbeef]`, `[8 + 5 * !func]`

To index an array use the `.` operator, this does not deref,
just moves the pointer value by (X * element_size).
eg: `EXPR.EXPR`, `some_array.0`, `string.i`

Indexes starts from 0 (as god intended).

structs are indexed by field, field names being specific byte offsets.
Like in C we use `->` for that. (again value is not automatically dereferenced).
eg: `EXPR->EXPR`, `my_struc->foo`

This syntax may also accept any integer offset.
eg: `my_struc->8`
