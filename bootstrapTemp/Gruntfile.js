require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['*.js']
		},		
		uglify: {
			dist: {
				src: 'js/main.js',
				dest: 'js/main.min.js'
			}
		},		
		sass: {
		    dist: {
		      files: {
		        'css/main.css': 'css/main.scss'
		      }
		    }
		  },		  
		cssmin: {
		  combine: {
		    files: {
		      'css/styles.min.css': ['css/styles.css']
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