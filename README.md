# how to x in y

> [!NOTE]
> Very early dev.

## Dev guide

### To add a new language

- add a new `i18n/<L>.tom` and translate all the keys
- add a new `content/<L>/` folder
  - to add examples, add `content/<L>/examples/<E>/_index.md`
  - to add programing languages, add `content/<L>/languages/<P>/_index.md`
- update `hugo.toml`
  - `[languages]`
  - `[[cascade]]`

TODO: automate this

### To add a new example template

- add `content/<L>/examples/<E>/_index.md`

  translate for all the exiting languages if possible

### To add new examples

- add `content/<L>/<P>/<E>.md` using the specified slug in the example template
