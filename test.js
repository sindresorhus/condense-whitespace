import test from 'ava';
import condenseWhitespace from './index.js';

test('main', t => {
	t.is(condenseWhitespace('  foo bar     baz '), 'foo bar baz');
	t.is(condenseWhitespace(''), '');
	t.is(condenseWhitespace(' '), '');
	t.is(condenseWhitespace(' | '), '|');
});
