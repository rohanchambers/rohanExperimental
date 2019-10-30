// Tutorial https://www.youtube.com/watch?v=D_9wd19X5gQ
// startup: npm run dev or build

const path = require('path')
// Call this to get dev Server as part of webpack
const webpack = require('webpack')

/* Webpack Placeholders for filenames 
*has issues when using for filename with [hash]
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
		myfile: './src/js/app.js',
	}, 
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		//publicPath: '/assets/',
		// libraryTarget: 'var',
		// library: 'myfirstlibrary'
	},
	module: {
		// any files that have css
		rules: [
			{
				test: /\.css$/, use: ['style-loader', 'css-loader']	
			},
			{
		        test: /\.js$/,
		        exclude: /(node_modules)/,
		        use: {
		          loader: 'babel-loader',
		          options: {
		            presets: ['@babel/preset-env']
		          }
		        }					
			}			
		]
	},

	//test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/', query:{presets:['es2015']}
	devServer: {
		port: 8080,
		contentBase: path.join(__dirname, 'dist'),
		writeToDisk: false// to check webpack is working
	}//
	//plugins: [new webpack.HotModuleReplacementPlugin()]
}