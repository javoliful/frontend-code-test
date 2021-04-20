module.exports = {
	env: {
		browser: true,
		es6: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module'
	},
	extends: ['prettier'],
	plugins: ['@typescript-eslint', 'jsdoc', 'prettier'],
	rules: {
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false
				}
			}
		],
		'no-param-reassign': 'error',
		'@typescript-eslint/semi': ['error', 'always'],
		'comma-dangle': ['error', 'never'],
		complexity: 'off',
		'default-case': 'error',
		'eol-last': ['error', 'always'],
		eqeqeq: ['error', 'smart'],
		'max-len': [
			'error',
			{
				code: 140
			}
		],
		'prettier/prettier': ['error'],
		'no-multiple-empty-lines': 'error',
		'no-trailing-spaces': 'off',
		'no-var': 'error',
		radix: 'error',
		'jsdoc/check-alignment': 1,
		'jsdoc/check-param-names': 1,
		'jsdoc/check-tag-names': 1,
		'jsdoc/check-types': 1,
		'jsdoc/implements-on-classes': 1,
		'jsdoc/newline-after-description': 1,
		'jsdoc/no-undefined-types': 1,
		'jsdoc/require-jsdoc': 1,
		'jsdoc/require-param': 1,
		'jsdoc/require-param-name': 1,
		'jsdoc/require-param-type': 1,
		'jsdoc/require-returns': 1,
		'jsdoc/require-returns-check': 1,
		'jsdoc/require-returns-description': 1,
		'jsdoc/require-returns-type': 1,
		'jsdoc/valid-types': 1
	}
};
