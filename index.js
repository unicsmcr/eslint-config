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
					'PascalCase', 'StrictPascalCase', 'UPPER_CASE'
				]
			},
			{
				'selector': 'enum',
				'format': [
					'PascalCase', 'StrictPascalCase'
				]
			}
		]
	}
}
