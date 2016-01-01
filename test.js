import test from 'ava';
import m from './';

test(t => {
	t.is(m('  foo bar     baz '), 'foo bar baz');
});
