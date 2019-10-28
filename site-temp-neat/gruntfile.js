module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// SASS task config
		sass: {
			dist: {
				files: {
					'assets/css/styles.css' : 'assets/scss/styles.scss'
				}
			}
		},

		postcss: {
			options: {
			map: false, // inline sourcemaps

			processors: [
				require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
			]
			},
			dist: {
				src: 'assets/css/styles.css'
			}
		},

		concat: {
			css: {
				src: ['bower_components/normalize-css/normalize.css', 'assets/css/styles.css'],
				dest: 'assets/css/compiled.css'
			},
			js: {
				options: {
					separator: '\n;',
				},
				src: ['assets/js/modernizr-custom.js', 'bower_components/jquery/dist/jquery.min.js', 'assets/js/vendor/**/*.js', 'assets/js/main.js'],
				dest: 'assets/js/compiled.js'
			}
		},

		// CSS min styles.css
		cssmin : {
			minify : {
				expand : true,
				cwd : 'assets/css/',
				src : [ '*.css', '!*.min.css' ],
				dest : 'assets/css/',
				ext : '.min.css'
			}
		},

		// JShint for scripts
        jshint: {
            all: {
                src: 'assets/js/main.js',
	            options: {
					camelcase: true,
					noempty: true,
					quotmark: 'single',
				    curly: true,
				    eqeqeq: true,
				    eqnull: true,
				    browser: true,
				    globals: {
				      jQuery: true
				    }
				}
            }
        },

        // Minify JS
        uglify: {
            all: {
                files: {
                    'assets/js/compiled.min.js': 'assets/js/compiled.js',
                }
            }
        },

		// Environment Production, Dev
		targethtml: {
			options: {
				curlyTags: {
					rlsdate: '<%= grunt.template.today("yyyymmdd") %>'
				}
			},

			dist: {
				files: {
				  'dist/index.php': 'src/index-dev.php'
				}
			}
		},

        // Minify HTML
		htmlmin: {
			file: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				}, files: {
					'dist/index.php': 'dist/index.php',
				}
			}
		},

		// For quick start up projects and host setup needed
	    php: {
	        dist: {
	            options: {
	                hostname: 'localhost',
	                port: 3000,
	                base: '', // Project root
	                keepalive: false,
	                open: false
	            }
	        }
	    },

		// Using the BrowserSync Server for your static .html files and PHP needs hosts setup.
		browserSync: {
			default_options: {
				files: {
					src: [
						"assets/css/*.css",
						"assets/js/**/*.js",
						"src/*.php",
						"incl/*.php"
					]
				},
				options: {
					watchTask: true,
					proxy: "sitetempneat.local/src/index-dev.php"
				}
			}
		},

 		// Watch task config
		watch: {
			html: {
				files: '/',
			},
			css: {
				files: 'assets/scss/**/*.scss',
				tasks: ['sass', 'postcss']
			},
			js: {
				files: 'assets/js/**/*.js',
			}
		},

		imagemin: {
		   home: {
		      options: {
		        optimizationLevel: 5
		      },

		      files: [{
		         expand: true,
		         cwd: 'assets/img-uncompressed',
		         src: ['**/*.{png,jpg,gif}'],
		         dest: 'assets/img'
		      }]
		   }
		},

		// Another form for caching assets manually creating the file with version number
		assets_versioning: {
		    deployment: {
		        options: {
		        	tag: 'hash',
					hashLength: 6,
		            versionsMapFile: 'assets.json'
		        },
		        files: {
		            'assets/js/compiled.min.js': ['assets/js/compiled.min.js'],
		            'assets/css/compiled.min.css': ['assets/css/compiled.min.css']
		        }
		    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-targethtml');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-php');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-assets-versioning');
	grunt.loadNpmTasks('grunt-postcss');

	// Dev
	grunt.registerTask('default', ['browserSync', 'watch']);

	// Production - Build app
	grunt.registerTask('prod', ['browserSync', 'concat' ,'cssmin', 'jshint', 'uglify', 'targethtml', 'htmlmin', 'watch']);
	// 'assets_versioning',

	// Asset versioning
	grunt.registerTask('vers', ['assets_versioning']);

	// Minify images
	grunt.registerTask('minifyImg', ['imagemin']);
};