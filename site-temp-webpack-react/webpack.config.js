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
	mode: 'production',
	entry: {
		main: './src/js/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
		//publicPath: '/',
	},
	devServer: {
		port: 8080,
		contentBase: path.join(__dirname, 'dist'),
		writeToDisk: true
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
			    use: [
			        {
			            loader: 'file-loader',
			            options: {
						  	limit: 8000,
						    name: '[name]-[hash].[ext]',			            	
			                outputPath: 'img/'
			            }
			        },
			        {
			            loader: 'image-webpack-loader',
						options: {
					        mozjpeg: {
					          progressive: true,
					          quality: 65
					        },
					        // optipng.enabled: false will disable optipng
					        optipng: {
					          enabled: false,
					        },
					        pngquant: {
					          quality: [0.65, 0.90],
					          speed: 4
					        },
					        gifsicle: {
					          interlaced: false,
					        },
					        // the webp option will enable WEBP
					        webp: {
					          quality: 75
					        }
						  }
			        }
			    ]
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
		new MiniCssExtractPlugin({
		  filename: 'styles.[chunkhash].css',
		}),
		new CleanWebpackPlugin(),
	    new HtmlWebpackPlugin({
	      minify: { collapseWhitespace: false},
	      inject: false,
	      hash: true,
	      template: 'src/index.html',
	      filename: 'index.html'
	    }),
	],
	resolve: {
		alias: {
			//"TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
		}
	}
}