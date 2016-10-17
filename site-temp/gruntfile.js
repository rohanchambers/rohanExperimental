module.exports = function(grunt){

	// Load all of the tasks automatically using the matchdep dependency
	//require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		// SASS task config
		sass: {
			dist: {
				files: {
					'assets/css/styles.css' : 'assets/sass/styles.scss'
				}
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
				src: ['bower_components/jquery/dist/jquery.min.js', 'assets/js/vendor/**/*.js', 'assets/js/main.js'],
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

		// Environment Production, Dev
		targethtml: {
			dist: {
				files: {
				  'dist/index.php': 'src/index-dev.php'
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
					proxy: "sitetemp.dev/src/index-dev.php"
				}
			}
		},

 		// Watch task config
		watch: {
			html: {
				files: '/',
			},
			css: {
				files: 'assets/sass/**/*.scss',
				tasks: ['sass']
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

		assets_versioning: {
		    deployment: {
		        options: {
		        	tag: 'hash',
					hashLength: 6,
		            versionsMapFle: 'assets.json'
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
	grunt.loadNpmTasks('grunt-browser-sync');;
	grunt.loadNpmTasks('grunt-php');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-assets-versioning');

	// Dev
	grunt.registerTask('default', ['browserSync', 'jshint', 'watch']);	
	
	// Production - Build app
	grunt.registerTask('prod', ['browserSync', 'concat' ,'cssmin', 'jshint', 'uglify', 'targethtml', 'htmlmin', 'assets_versioning', 'watch']);

	// Minify images
	grunt.registerTask('vers', ['assets_versioning']);

	// Minify images
	grunt.registerTask('minifyImg', ['imagemin']);
};