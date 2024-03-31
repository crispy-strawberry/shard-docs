---
title: Types
description: Type system for Shard
---

## Basic
**Sizes:**
    Represtent number of bytes that the data takes up.
    eg: `1`, `8`, `98`

**Registers:**
While not *technically* a type (they're both a type and an identifier),
we can treat them as such for the purposes of this doc.
Using one as such allows you to bind a variable to a single register.


| Suffix | Name | Size |
| :------: | :------: | :------: |
| `b` | byte   | 1     |
| `s` | short  | 2     |
| `l` | long   | 4     |
| `d` | double | 8     |
| `q` | quad   | 16    |
| `o` | octa   | 32    |
| `h` | hxdc   | 64    |
| `w` | word   | #WORD |

eg: `r0`, `r28d`, `r999999999w`




## Derivative
**Floats:**
Floating point number. `fN` where N ∈ {4, 8}
eg: `f4`, `f8`

**Signed Integers:**
An integer with a sign bit prepended. `sN` where N ∈ {1, 2, 4, 8}
eg: `s4`, `s1`


## Composite
**Pointers:**
Size equal to architecture word. Wraps around a type T. `[T]`
eg: `[8]`, `[s2]`

**Arrays:**
List of N elements of type T. `T:N`
eg: `4:66`, `f4:6`

**Structs:**
Hold types and namespaced labels. Referenced by identifier.
Comp WARN if not CamelCase  ~~maybe not, dont know if forcing this is a good idea~~
eg: `String`, `Position`

## Guessing 
In some cases it is possible to leave the compiler the guesswork of figuring out 
what type something is by instead of the type inserting the `?` operator.

Keep in mind, and this feature works "behind the scenes" and so is inherently unstable, use with care.
