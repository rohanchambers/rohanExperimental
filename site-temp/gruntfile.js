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
		htmlmin: {                                     	 // Task
			dist: {                                      // Target
			  options: {                                 // Target options
			  },
			  files: {                           // Dictionary of files
			    'index.php': 'index-dev.php'     // 'destination': 'source'
			  }
			}
		}, 

		// Production / Dev 
		targethtml: {
		  dist: {
		    files: {
		      'index.php': 'index-dev.php'
		    }
		  }
		},

		// Using the BrowserSync Server for your static .html files.
		browserSync: {
		  default_options: {
		    bsFiles: {
		      src: [
		        "assets/css/*.css",
		        "assets/js/**/*.js",
		        "*.php",
		        "incl/*.php"
		      ]
		    },
		    options: {
		      watchTask: true,
				proxy: "sdd.dev/index-dev.php"
		    }
		  }
		},

 		// Watch task config
		watch: {
			css: {
				files: 'assets/sass/**/*.scss'
				//tasks: ['sass', 'concat', 'cssmin', 'jshint', 'uglify']
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

	grunt.registerTask('default', ['watch', 'sass', 'concat' ,'cssmin', 'jshint', 'uglify']);
};