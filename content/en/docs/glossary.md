+++
title = "glossary"
+++

## Introduction

All programing languages use different words for different concept.
E.g. `list`/`array`, `package`/`module`, etc.

This site aims at making examples discoverable and searchable. In that, it uses
a _consistent_ list of English words to describe similar concepts in various
programing languages.

This is inherently incorrect, for example:

- in Python, `array` is used along side `list` to designate the same concept.
  Although [`list`](https://docs.python.org/3/glossary.html#term-list) is the
  correct term, as
  [`array`](https://docs.python.org/3/library/array.html#array.array) is a
  different type.
- in Go, [`array`](https://go.dev/ref/spec#Array_types) is slightly different
  from [`slice`](https://go.dev/ref/spec#Slice_types), even if they are confused
  for the same thing.

It is however possible to set "aka" values in the frontmatter of `X`s and `Y`s.

Examples:

- `/en/x/array_reverse/_index.md`

  ```markdown
  +++
  title = "Reverse an array"
  aka = ["Reverse a list"]
  +++
  ```

- `/en/y/go/_index.md`

  ```markdown
  +++
  title = "Go"
  aka = ["Golang"]
  +++
  ```

TODO: in the event of the word being an important distinction, exceptions can be
made.

## The glossary

- `array`: an ordered sequence of element

  Examples:

  - ```python
    days = ["Monday", "Tuesday", "Wednesday"]
    ```

  - ```go
    days = []string{"Monday", "Tuesday", "Wednesday"}
    ```

  Rational:

  - Preferred over `list` because it is also a verb.
  - Preferred over `slice` because in many languages it means "cutting an array."

  References:

  - https://en.wikipedia.org/wiki/Array_(data_structure)

- `dict`: an unordered collection of key, value pairs

  Shortened form of `dictionary`.

  Examples:

  - ```python
    albums = { "Nirvana": "Nevermind", "AC/DC": "Back In Black" }
    ```

  - ```go
    albums = map[string]string{ "Nirvana": "Nevermind", "AC/DC": "Back In Black" }
    ```

  Rational:

  - Preferred over `map` because it is also a verb.
  - Preferred over `hash` because it is also a verb and a cryptographic
    operation.

  References:

  - https://en.wikipedia.org/wiki/Associative_array
