var gulp = require('gulp');
var sass = require('gulp-sass');
//var neat = require('node-neat').includePaths;
//var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

// var paths = {
// 	scss: './assets/sass/*.scss'
// };

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('assets/scss/**/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('src/*.php', browserSync.reload); 
  gulp.watch('assets/js/**/*.js', browserSync.reload);   
});

gulp.task('sass', function () {
  return gulp.src('assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));    
});

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'sitetemp.dev/src/index-dev.php'
  });
});

gulp.task('default', ['watch']);