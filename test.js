'use strict';
var test = require('ava');
var condenseWhitespace = require('./');

test(function (t) {
	t.assert(condenseWhitespace('  foo bar     baz ') === 'foo bar baz');
	t.end();
});
