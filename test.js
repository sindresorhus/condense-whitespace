import test from 'ava';
import condenseWhitespace from '.';

test('main', t => {
	t.is(condenseWhitespace('  foo bar     baz '), 'foo bar baz');
});
