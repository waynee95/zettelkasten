---
date: 2021-03-12
---

# JFlex

## Overview

- Lexical analyzer generator written in Java
- Takes in a set of regular expressions and corresponding actions and will generate a _lexer_ (or _scanner_)

## How to

- A specification consists of three parts, divided by `%%`

```
User code
%%
Options and declarations
%%
Lexical rules
```

### User code

- This code is copied as is to the top of the generated lexer class (_before_ the actual class generation)
- Usually used for `package` and `import`
- Helper or token classes should be placed into their own `.java` files and not here

### Options and macros

- This section is for specifying _options_, code that will be included _inside_ the generated class, _lexical states_ and _macros_
- **Options**
  - Must be in a new line starting with `%`
  - `%class Lexer` (change the name of the class to `Lexer.java`, default: `Yylex.java`)
  - `%public`
  - `%type void` (determines the return type of the `yylex()` function, usually this is the token class)
  - `%line` (enables line counting, accessible via `yyline`)
  - `%column` (enables column counting, accessible via `yycolumn`)
- **Code**
  - The code between `%{` and `%}` is copied as is into the generated lexer class
  - The code between `%init{` and `%init}` is copied into the _constructor_ of the generated class
  - Used for declaring member variables and functions used in the actions
- **Macros**
  - Used to shorten regular expressions. Example: `LineTerminator = \r|\n|\r\n`
- **States**
  - The last part of the specification is state declaration
  - `state STRING` declares a lexical state which can be used in the lexical rules below
  - Example: `%state FIRST, REST`

### Rules and actions

- This section is specifying rules in the form of RE and actions (Java code) that are executed when the scanner matches the associated rule
- The action will the longest match will be used
  - If two RE both match, the RE that appears first (from top to bottom) will be used
- `yytext()` will return the matched input

```
{Identifier}    { System.out.println("id " + yytext()); }
"=="            { System.out.println(yytext()); }
```

- In addition to RE and macros, there are _explicit states_ that can be used for actions
- `YYINITIAL` is the predefined implicit starting state of the scanner

```
%{
  StringBuffer string = new StringBuffer();
%}

%states string

%%

<STRING> {
      \"                             { yybegin(YYINITIAL);
                                       return symbol(sym.STRING_LITERAL,
                                       string.toString()); }
      [^\n\r\"\\]+                   { string.append( yytext() ); }
      \\t                            { string.append('\t'); }
      \\n                            { string.append('\n'); }

      \\r                            { string.append('\r'); }
      \\\"                           { string.append('\"'); }
      \\                             { string.append('\\'); }
    }
```

## References

- [JFlex manual](https://jflex.de/manual.html)
- [Lexical Analysis using JFlex](https://www.cs.auckland.ac.nz/courses/compsci330s1c/lectures/330ChaptersPDF/Chapt1.pdf)
