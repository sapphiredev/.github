const sapphirePrettierConfig = require('@sapphire/prettier-config');

module.exports = {
	...sapphirePrettierConfig,
	overrides: [
		...sapphirePrettierConfig.overrides,
		{
			files: ['README.md', 'LICENSE.md', '.github/**/*.md', 'profile/README.md'],
			options: {
				tabWidth: 2,
				useTabs: false,
				printWidth: 120,
				proseWrap: 'always'
			}
		},
		{
			files: ['.github/CODEOWNERS'],
			options: {
				parser: 'yaml'
			}
		}
	]
};
