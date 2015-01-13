# condense-whitespace [![Build Status](https://travis-ci.org/sindresorhus/condense-whitespace.svg?branch=master)](https://travis-ci.org/sindresorhus/condense-whitespace)

> Remove leading, trailing and repeated whitespace from a string


## Install

```
$ npm install --save condense-whitespace
```


## Usage

```js
var condenseWhitespace = require('condense-whitespace');

condenseWhitespace('  foo bar     baz ');
//=> 'foo bar baz'
```


## Related

- [`trim-repeated`](https://github.com/sindresorhus/trim-repeated) - Trim a consecutively repeated substring: `foo--bar---baz` → `foo-bar-baz`


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
