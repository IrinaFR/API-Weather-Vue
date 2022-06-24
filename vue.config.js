const { defineConfig } = require('@vue/cli-service')
	module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		https: false,
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	})
