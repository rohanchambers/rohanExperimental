module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['*.js']
		},		
		uglify: {
			dist: {
				src: 'includes/js/script.js',
				dest: 'includes/js/script.min.js'
			}
		},		
		sass: {
		    dist: {
		      files: {
		        'includes/css/styles.css': 'includes/css/styles.scss'
		      }
		    }
		  },		  
		cssmin: {
		  combine: {
		    files: {
		      'includes/css/styles.min.css': ['includes/css/styles.css']
		    }
		  }
		}				
	});
	
  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');    
  
  // Default task(s).
  grunt.registerTask('default', ['jshint','uglify', 'sass', 'cssmin']);	
  
};