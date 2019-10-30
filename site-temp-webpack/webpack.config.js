// Tutorial https://www.youtube.com/watch?v=D_9wd19X5gQ
const path = require('path')
const webpack = require('webpack')

/* Webpack Placeholders for filenames
* [hash]
* [chunkhash]
* [name]
* [id]
* [query]
* [contenthash]
*/

module.exports = {
	mode: 'development',
	entry: {
		myfile: './src/engine.js',
	}, 
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/main.js',
		publicPath: '/assets/',
		// libraryTarget: 'var',
		// library: 'myfirstlibrary'
	},
	devServer: {
		port: 1234,
		contentBase: path.join(__dirname, 'dist'),
		writeToDisk: false// to check webpack is working
	}//
	//plugins: [new webpack.HotModuleReplacementPlugin()]
}