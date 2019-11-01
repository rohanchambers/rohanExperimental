//Webpack 4 | Tutorial https://www.youtube.com/watch?v=D_9wd19X5gQ
// Terminal: npm run dev or build
const path = require('path')
// Call this to get dev Server as part of webpack
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
		main: './src/js/app.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[chunkhash].js',
		//publicPath: '/assets/',
		// libraryTarget: 'var',
		// library: 'myfirstlibrary'
	},
	module: {
    	rules: [
            {
                test: /\.(scss|sass|css)$/, 
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },                    
                ]
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
	plugins: [
		new MiniCssExtractPlugin({
		  // Options similar to the same options in webpackOptions.output
		  // all options are optional
		  filename: 'styles.[chunkhash].css',
		  ignoreOrder: false, // Enable to remove warnings about conflicting order
		}),
	    new HtmlWebpackPlugin({
	      inject: false,
	      hash: true,
	      template: 'src/index.html',
	      filename: 'index.html'
	    })		
	],	
	devServer: {
		port: 8080,
		contentBase: path.join(__dirname, 'dist'),
		writeToDisk: false // to check webpack is working
	}
}