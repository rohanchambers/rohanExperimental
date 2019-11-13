// Webpack 4 Learning and creation of Boilerplate
// Terminal: npm run dev or build
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/js/app.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[chunkhash].js',
		//publicPath: '/',
	},
	devServer: {
		port: 8080,
		contentBase: path.join(__dirname, 'dist'),
	},
	module: {
    	rules: [
			{
		        test: /\.js$/,
		        exclude: /(node_modules)/,
		        use: {
		          loader: 'babel-loader',
		          options: {
		            presets: ['@babel/preset-env']
		          }
		        }
			},
			{
			  test: /\.(gif|png|jpe?g|svg)$/i,
			  	use: {
				  	loader: 'file-loader',
					  options: {
					    name: '[name]-[hash].[ext]',
					    outputPath: 'img/'
					}
				}
			},
			{
				test: /\.(scss|sass|css|)$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					"css-loader", 
					"postcss-loader", 
					"sass-loader"
				]
			},		
			{
				test: /\.(woff|woff2|eot|svg|ttf|otf)$/,
			  	use: {
				  	loader: 'file-loader',
					  options: {
					    name: '[name].[hash].[ext]',
					    outputPath: 'fonts/'
					}
				}
			},
    	]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
		  filename: 'styles.[chunkhash].css',
		}),
	    new HtmlWebpackPlugin({
	      minify: { collapseWhitespace: false},
	      inject: false,
	      hash: true,
	      template: 'src/index.html',
	      filename: 'index.html'
	    }),
	    // // Copy assets over to dist folder eg. img / fonts
	    // new CopyPlugin([
	    //   { from: 'src/img', to: 'img'},
	    //   { from: 'src/fonts', to: 'fonts'}
	    // ]),        
	    // npm run stylelint to lint your SCSS files
	    // new StyleLintPlugin({
	    //   configFile: './stylelint.config.js',
	    //   files: './src/scss/**/*.scss',
	    //   syntax: 'scss'
	    // }),
	],
	resolve: {
		alias: {
			"TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
			"TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
			"ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
			"animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
			"debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
			"scrollTo": path.resolve('node_modules', 'gsap/src/uncompressed/plugins/ScrollToPlugin.js')
			// '@scss': path.resolve(__dirname, '../src/scss'),
			// '@img': path.resolve(__dirname, '../src/img'),
			// '@': path.resolve(__dirname, '../src'),
		}
	}
}