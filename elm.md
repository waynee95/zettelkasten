---
date: 2021-03-12
---

# Elm

## Why Elm?

- functional language that compiles to JavaScript
- designed for writing front-end applications for the web
- elm code is fast, hard to break, easily testable and maintainable

> Elm is a functional programming language for the _practical_ frontend developer.

- most common issues with front-end development do not exist in Elm
- no `null`, no `undefined is not a function`, no runtime exceptions
- instead you have compile time errors

> Elm insures that errors will happen at compile time, in front of a developer, instead of runtime, in front of a user.

- Elm's compiler is your friend
- it provides _very specific, human-friendly compile errors_
- they explain _why_ it does not work, instead of _what_ just broke
- tend to include links and spelling suggestions
- Elm packages have _enforced semantic versioning_
- with Elm's type system you will write fewer, more meaningful tests

> _Maintainability_ is Elm's killer feature.

- with Elm's compiler you have no fear of refactoring
- if there is something wrong, the compiler will tell you
- no need to rewrite the entire application in Elm
- existing JavaScript code can easily talk to Elm code
- Elm is _expression-oriented_
- no `return` statement, since each expression will naturally result in a value
- function calls do not use parentheses or commas
- a common pattern is to create pipelines using the pipe operator `|>`

```elm
formatString myString =
    myString
        |> String.reverse
        |> String.append "Hello "
        |> String.reverse
```

vs.

```js
function formatString(str) {
  var reversed = str.reverse();
  var withHello = "Hello, " + reversed;
  return withHello.reverse();
}
```

- Elm pipelines are the same as method chaining in JavaScript
- records are key/value pairs that are similar to JavaScript or Python objects

```elm
type alias Person =
    { name : String
    , age : Int
    }
```

- `Person` will always have two fields of type `String` and `Int`
- we can use _type annotations_ to describe what a function does
- they are optional, but you should always use them

> You can think of _type signatures_ as enforced documentation that never gets out of sync with your code.

```elm
greet : Person -> Int -> String
greet person numberOfCats =
    "Hello " ++ person.name ++ ", you have " ++ toString numberOfCats ++ " cats."
```

- read as "`greet` is a function that takes a `Person` and an `Int` and results in a `String`"
- we do not have to do any defensive checking in this function
- there are also _sum types_ or _tagged union_

```elm
type Fruit
    = Banana
    | Apple
    | Cherry
```

- `Fruit` can have one of the three values, there is no `null`

```elm
fruitToString : Fruit -> String
fruitToString fruit =
    case fruit of
        Banana ->
            "This is a banana."

        Apple ->
            "This is an apple."

        Cherry ->
            "This is a cherry."
```

- better than JavaScript `switch` statement
- compiler enforces _exhaustiveness_ checking, you will get an error if you do not cover all possible cases

```
Line 11, Column 5
This `case` does not have branches for all possibilities:

11|>    case fruit of
12|>        Banana ->
13|>            "This is a banana."
14|>
15|>        Apple ->
16|>            "This is an apple."

Missing possibilities include:

    Cherry

I would have to crash if I saw one of those. Add branches for them!

Hint: If you want to write the code for each branch later, use `Debug.todo` as a
placeholder. Read <https://elm-lang.org/0.19.0/missing-patterns> for more
guidance on this workflow.
```

- sum types can also have values inside

```elm
type Greeting
    = Hello String
    | RunAway


greet : Greeting -> String
greet greeting =
    case greeting of
        Hello name ->
            "Hello, " ++ name ++ "!"

        RunAway ->
            "Uhh, nevermind."
```

- there is no `null`, instead we use the `Maybe` type

## References

- [Why Elm? by Matthew Griffith, 2017 O'Reilly Media](https://www.oreilly.com/web-platform/free/files/why-elm.pdf)
- [Elm crash course - Building unbreakable webapps fast](https://youtu.be/kEitFAY7Gc8)
