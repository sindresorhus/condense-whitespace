export default function condenseWhitespace(string) {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a string, got \`${typeof string}\``);
	}

	return string.trim().replace(/\s{2,}/gu, ' ');
}
