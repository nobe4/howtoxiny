+++
title = "dict"
description = "unordered collection of key, value pairs"
references = [
    "https://en.wikipedia.org/wiki/Associative_array"
]
+++

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
