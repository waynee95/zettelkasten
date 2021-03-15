---
date: 2021-03-12
---

# Tail Recursion

A function is _tail recursive_ when the recursive call is the last function
invoked in the evaluation of the body of the function. We don't need to return
to the caller at all.

Normal recursion: You need to stack to remember what "remains to be computed".
Tail recursion: You need to remember nothing.

Tail recursion is comparable with iteration.

## Haskell example

### Naive recursion

```haskell
sumList :: [Int] -> Int
sumList [] = 0
sumList (x:xs) = x + (sumList xs)
```

### Tail recursion

```haskell
sumList' :: [Int] -> Int
sumList' xs = sumLoop 0 xs
  where
    sumLoop n []      = n
    sumLoop n (x:xs)  = sumLoop (n + x) xs
```

## References

- [http://scienceblogs.com/goodmath/2006/12/20/tail-recursion-iteration-in-ha-1/](http://scienceblogs.com/goodmath/2006/12/20/tail-recursion-iteration-in-ha-1/)
