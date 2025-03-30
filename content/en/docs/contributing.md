+++
title = "contributing"
+++

## By contributing,

- you agree to have your contribution distributed under the [CC BY-NC-SA 4.0
  license](https://github.com/nobe4/howtoxiny/blob/main/LICENSE);
- you swear to have ownership over the content and are able to share it under the
  aforementioned license;

## What to contribute

There are many things to contribute here, here is a non exhaustive list:

- Add, update, translate `X`
- Add, update, translate `Y`
- Add missing translation
- Fix typo
- Improve code
- Improve prose
- Fix any of the `TODO`

## Guidelines

### `X`

`X`s are simple tasks to perform, they must do one thing and one thing only.

For instance, `filter and sort matching string prefix` can be broken down in
three `X`s:

- `filter an array`
- `sort an array`
- `match a string prefix`

Adding a new `X` involves:

1. Writing its definition

   The definition gives the `X` its title, file pattern, {{< glossary "aka" >}}.

   See [examples](https://github.com/nobe4/howtoxiny/tree/main/content/en/x).

   The definition must always be added _first_ in the `en` language. This is
   how linking with other languages work. See {{< glossary "cascade" >}}.

   The file path should follow [Hugo's taxonomy doc](https://gohugo.io/content-management/taxonomies/#add-custom-metadata-to-a-taxonomy-or-term).

   {{< details summary="Example" >}}

<!-- find how to include the real content of a file -->
<!-- prettier-ignore -->
```markdown
# content/en/x/string_prefix_match/_index.md
+++
title = "match a string prefix"
aka = [
  "match the string first part",
  "match the string start",
  "match the prefix of a string",
  "match the start of a string",
]
+++
...
```

    {{< /details >}}

    - `file pattern`

      ```
      <what>_[what_]+<action>
      ```

      The `what`s go from most general, to less general.

      Examples:

      - ✅ `string_prefix_match`
      - ❌ `match_string_prefix`
      - ❌ `string_prefix_match`

      The logic here is to have common _types_ in nearby files.
      This won't impact how it will render, this is purely file organization.

    - `title`

      Those will be displayed, and they must be inserted in the following
      sentence:

      ```
      In order to <title>, I will ...
      ```

      The title must not start with an uppercase letter.

      Examples:

      - ✅ `match a string prefix`
      - ❌ `to match the prefix of a string`
      - ❌ `How to match the string prefix`

    - `aka`

      They should follow the same rules as `title`, but can be more free in
      their writing.

    - `content`

      The content gives additional details on the `X`. Its usefulness, its
      edge-cases, etc.

      It must also set the _fixed parameters_ for the examples. This ensures
      that all code have a limited amount of differences.

      Example:

      ```markdown
      Matching a string prefix means checking if the string starts by a
      specified content.

      Examples:
      - `a great day` start with `a great`
      - `a pretty night` does not start with `a great`
      ```

2. Adding examples

TODO
