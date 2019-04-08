/**
Remove leading, trailing and repeated whitespace from a string.

@example
```
import condenseWhitespace = require('condense-whitespace');

condenseWhitespace('  foo bar     baz ');
//=> 'foo bar baz'
```
*/
declare function condenseWhitespace(str: string): string;

export = condenseWhitespace;
