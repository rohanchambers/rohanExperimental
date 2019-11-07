// Webpack 4 Learning and creation of Boilerplate
// Terminal: npm run dev or build

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
		// libraryTarget: 'var',
		// library: 'myfirstlibrary'
	},
	devServer: {
		port: 8080,
		contentBase: path.join(__dirname, 'dist'),
		writeToDisk: false // to check webpack is working
		//hot: true,
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
                test: /\.(scss|sass|css)$/,
                use: [
                	'style-loader',
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { url: false, sourceMap: true} },
                    { loader: 'postcss-loader'}, // Autoprefixer see config
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ]
            },
			// {
			//   test: /\.(html)$/,
			//   use: {
			//     loader: 'html-loader',
			//     options: {
			//       attrs: ['img:src']
			//     }
			//   }
			// },	            
			{
			  test: /\.(gif|png|jpe?g|svg)$/i,
				exclude: [
				  path.resolve(__dirname, './node_modules'),
				],
			  	use: [
				{
			  	loader: 'file-loader',
				  options: {
				  	limit: 8000,
				    name: '[name]-[hash:8].[ext]',
				    outputPath: 'img/'
				  }
				}
			  ],
			},		
			// {	
			// 	test: /\.html$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: 'index.html'
			// 			}
			// 		},
			// 		{
			// 			loader: 'extract-loader'
			// 		},
			// 		{
			// 			loader: 'html-loader',
			// 			options: {
			// 				attrs: ["img:src"]
			// 			}
			// 		}
			// 	]
			// },			
    	]
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
		  // Options similar to the same options in webpackOptions.output
		  // all options are optional
		  filename: 'styles.[chunkhash].css',
		  ignoreOrder: false, // Enable to remove warnings about conflicting order
		}),
	    new HtmlWebpackPlugin({
	      minify: { collapseWhitespace: false},
	      inject: false,
	      hash: true,
	      template: 'src/index.html',
	      filename: 'index.html'
	    }),
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