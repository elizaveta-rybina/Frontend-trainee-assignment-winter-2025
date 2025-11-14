const path = require('path')
const rewireAlias = require('react-app-rewire-alias')

module.exports = function override(config) {
	rewireAlias.alias({
		'@': 'src',
		'@pages': 'src/pages',
		'@features': 'src/features',
		'@entities': 'src/entities',
		'@widgets': 'src/widgets',
		'@app': 'src/app',
		'@shared': 'src/shared'
	})(config)

	return config
}
