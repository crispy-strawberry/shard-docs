---
title: Installing
description: A guide to installing the compiler for the Shard programming language.
---
To install Shard, you will _eventually_ be able to get it from your favourite linux package manager. Until then,
simply clone the shard compiler `shardc` from [here](https://github.com/shard-lang/shard) and build it by running:
```bash
$   cargo install
```
It should then be accessible on your path by typing `shardc`. Here is a simple example compilation command:
```shard
// hello_world.shard
main entry:
    $printf "Hello, World!", 0
    ret 0
```
```bash
$   sharc hello_world.shard -lc -o hello_world
```
Here, we first pass in the name of our shard program as the first argument then we add the `-l` is the flag to
 specify which library to link, in this case, we link the c standard library with `-lc`. The
`-o` flag specifies the name of the executable: `hello_world`.