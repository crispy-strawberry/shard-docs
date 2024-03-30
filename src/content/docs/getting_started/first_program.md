---
title: Your First Shard Program
description: Let's make our first shard program.
---
1. To get started, create a new file called `hello_world.shd`

2. Type the following program:
    ```shard
    // hello_world.shard
    main entry:
        $printf "Hello, World!", 0
        ret 0
    ```

3. Build the program by doing
    ```bash
    $ sharc hello_world.shard -lc -o hello_world
    ```
    Here, we first pass in the name of our shard program as the first argument then we add the `-l` is the flag to
    specify which library to link, in this case, we link the c standard library with `-lc`. The
    `-o` flag specifies the name of the executable: `hello_world`.

4. Run the program
    ```cmd
    $ ./hello_world
    Hello World
    ```
<br>
Now you have succesfully compiled and executed your first shard program.
Let's look at the language features in the next section.