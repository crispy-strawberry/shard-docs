---
title: Literals
description: Literals in Shard
---


### char
<!-- Chars consist of a single Unicode codepoint.
Note that this may not correspond to a human's perception
of a single "character". For those, see graphemes. -->
An ASCII character.  
eg: `&#96;a&#96;`, `&#96;\0&#96;`


### int
Unsigned integers  
Valid prefixes are `0x`, `0b` and `0o`  
eg: `6`, `0x7f`, `0b1001`, `0o7332`


### sint
Signed integers. They are stored internally in two's complement
representation.  
eg: `-43`, `+2`


### float
eg: `20.3`, `-0.002`


### str
They include any byte sequence enclosed within double quotes.  
eg: `"hello, world!"`, `hi\b\0`


### array/struc
Exact type is decided contextually.  
eg: `(1,3,9,0,1,3)`, `(2, "hi mom!", 2.0)`
