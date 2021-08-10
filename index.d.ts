/**
Remove leading, trailing, and repeated whitespace from a string.

@example
```
import condenseWhitespace from 'condense-whitespace';

condenseWhitespace('  foo bar     baz ');
//=> 'foo bar baz'
```
*/
export default function condenseWhitespace(string: string): string;
