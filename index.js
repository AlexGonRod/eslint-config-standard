module.exports = {
	extends: ['./base/.eslintrc', 'plugin:prettier/recommended'],
	env: {
		browser: true,
		es6: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			defaultParams: true,
			spread: true
		}
	},
	rules: {}
};
