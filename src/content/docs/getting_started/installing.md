---
title: Installing
description: A guide to installing the compiler for the Shard programming language.
---
To install Shard, you will _eventually_ be able to get it from your favourite linux package manager. Until then,
1. Clone the shard compiler `sharc` from [here](https://github.com/shard-lang/shard) 
   ```bash
   $ git clone https://github.com/shard-org/shard
   ```

2. Build it by running
    ```bash
    $ cargo install
    ```
3. It should then be accessible on your path by typing `sharc`. Check by trying out the following command
    ```bash
    $ sharc --version
    ```
    If you see something similar to this -
    ```
    The Sharc Compiler (Version 0.1.0)
    (c) Shard Contributors
    Licensed under the <BSD 3-clause> license.
    ```
    Congratulations! You are successfully installed the shard compiler.
    Now it's time to write your first program!
