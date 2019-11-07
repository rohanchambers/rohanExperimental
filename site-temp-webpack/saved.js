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
				    //publicPath: 'assets/img',
				  }
				},	    
			    {
			      loader: 'image-webpack-loader',
			      options: {
				  	limit: 8000,
				    name: '/img/[name]-[hash].[ext]',

			      //   mozjpeg: {
			      //     progressive: true,
			      //     quality: 65
			      //   },
			      //   // optipng.enabled: false will disable optipng
			      //   optipng: {
			      //     enabled: false,
			      //   },
			      //   pngquant: {
			      //     quality: [0.65, 0.90],
			      //     speed: 4
			      //   },
			      //   gifsicle: {
			      //     interlaced: false,
			      //   },
			      //   // the webp option will enable WEBP
			      //   webp: {
			      //     quality: 75
			      //   }
			      }
			    },
			  ],
			}
			// {	
			// 	test: /\.html$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: '[name].html'
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

			// {
			// test: /\.(sa|sc|c)ss$/,
			// 	use: [
			// 	  MiniCssExtractPlugin.loader,
			// 	  { loader: "css-loader", options: {} },
			// 	  {
			// 	    loader: "postcss-loader",
			// 	    options: {
			// 	      ident: 'postcss',
			// 	      plugins: [
			// 	        require('autoprefixer'),
			// 	      ]
			// 	    }
			// 	  },
			// 	  { loader: "sass-loader", options: {} }
			// 	]
			// },
