# condense-whitespace

> Remove leading, trailing, and repeated whitespace from a string

## Install

```
$ npm install condense-whitespace
```

## Usage

```js
import condenseWhitespace from 'condense-whitespace';

condenseWhitespace('  foo bar     baz ');
//=> 'foo bar baz'
```

## Related

- [`trim-repeated`](https://github.com/sindresorhus/trim-repeated) - Trim a consecutively repeated substring: `foo--bar---baz` → `foo-bar-baz`
