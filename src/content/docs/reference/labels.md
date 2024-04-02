--- 
title: Labels
description: Labels are defined as a pointer to wherever they're placed in the final binary.
             All statics, constants, functions, loops, etc are essentially labels.
---

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
eg: `main entry:` entry here is an attribute
                              

<table>
<thead>
<tr>
    <th>Attribute</th>
    <th>Description</th>
</tr>
</thead>

<tbody>
  <tr>
    <th>entry</th>
    <td>The program's entry point. Exclusive to one label.</td>
  </tr>
  <tr>
    <th>{} (body)</th>
    <td>A scope containing any number of statemenets.</td>
  </tr>
  <tr>
    <th>@ (at)</th>
    <td>
      Takes the next value. If its a literal use as the address of that label, if value starts with <code>.</code> 
      treat it as a binary section, like <code>.rodata</code> <code>STATIC_VAR @ .data [1]: "Hello, World!"</code>
    </td>
  </tr>
  <tr>
    <th>**()** (condition)</th> 
    <td>
      Run label if condition is met, otherwise ignore. </br>
      eg: <code>(var = 20) $puts "var is 20"</code>
    </td>
  </tr>
  <tr>
    <th>static</th>
    <td>macro to <code>@ .data</code></td>
  </tr>
  <tr>
    <th>const</th>
    <td>macro to <code>@ .rodata</code></td>
  </tr>
  <tr>
    <th>init</th>
    <td>macro to <code>@ .bss</code></td>
  </tr>
  <tr>
    <th>loop</th>
    <td>jump to itself at `{}` end.</td>
  </tr>
  <tr>
    <th>match</th>
    <td>
    <del>unsure if we want this as this attr has a custom syntax for the body</del>
    use match syntax. <br>
    <pre lang="shard"><code>match (g) {
  = 122 -> $puts "Thats right!"
  > 61  -> $puts "Over Half!"
  (!is_prime g) -> $puts "Prime!"
  ~     -> $puts "Wrong!"
}</code></pre>
    </td>
  </tr>
  <tr>
    <th>=> (then)</th>
    <td>
      Expects a following value. Must be `{}`. 
      Executes that following block after current function returns.
      In case of the `loop` attr this is done before the final jump
      <br>eg: <pre><code>%i 4
loop (i < 10) => {'i ++}:
$p

</code></pre>
</td>
  </tr>
  <tr>
    <th>argument</th>
    <td>
    <code>TYPE IDENT</code>, make the label require an argument of that type when called.
The argument will then be assigned to an identifier, by default stack allocated,
if the type is a register instead register allocated. Comma Separated.
<br>eg: <code>add 4 a, 4 b:</code>
    </td>
  </tr>
  <tr>
    <th>return</th>
    <td>
<code>-> TYPE</code>, mark the label as returning a value of TYPE. 
Allowing `ret` to accept an argument.
<br>eg: <code>ten -> 1: ret 10</code>
    </td>
  </tr>
</tbody>
</table>

:::note
The argument and return types act more as hints and convenience attributes
to the compiler and user, rather than as concerete rules.
It is possible to return values from a function that doesnt *state* it returns them,
or jump to a label with arguments it never intended to have.

This shows up as a compiler warning, as it's unstable and potentially the source of many bugs.
However as all compiler warnings it can be disabled.
:::