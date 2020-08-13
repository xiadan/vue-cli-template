const webpack = require('webpack')

module.exports = {
	publicPath: process.env.VUE_APP_BASEURL,
	outputDir: 'dist',
	assetsDir: 'static',
	lintOnSave: true,
	chainWebpack: config => {},
	configureWebpack: {
		resolve: {
			extensions: ['.vue', '.js'],
			descriptionFiles: ['package.json'],
			modules: ['node_modules'],
			alias: {
				'vue$': 'vue/dist/vue.common.js',
				'~c': '@/components',
				'~s': '@/store',
			}
		},
		plugins: [
			new webpack.ProvidePlugin({
				_: 'lodash',
				moment: 'moment',
				to: 'await-to-js',
			}),
		],
	},
	css: {
		sourceMap: true
	},
	productionSourceMap: false,
	// 配置 webpack-dev-server
	devServer: {
		open: process.platform === 'darwin',
		host: '0.0.0.0',
		port: process.env.VUE_APP_PORT,
		https: false,
		hotOnly: false,
		disableHostCheck: true,
		proxy: {
			'/request': {
				target: process.env.VUE_APP_API_PROXY,
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/request': '/request'
				}
			},
		}
	},
}
