module.exports = {
	extends: [
		'marine'
	],
	rules: {
		'@typescript-eslint/naming-convention': [
			'error',
			{
				'selector': 'enumMember',
				'format': [
					'PascalCase'
				]
			}
		]
	}
}
