var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var processhtml = require('gulp-processhtml');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();


gulp.task('watch', ['browserSync', 'sass'], function(){
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch('src/*.php', browserSync.reload);
    gulp.watch('assets/js/**/*.js', browserSync.reload);
});

    gulp.task('browserSync', function() {
        browserSync.init({
            proxy: 'sitetempgulp.dev/src/index-dev.php'
        });
    });

    gulp.task('sass', function () {
        return gulp.src('assets/scss/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer('last 2 versions'))
            .pipe(gulp.dest('assets/css'))
            .pipe(browserSync.reload({
              stream: true
        }));
    });

gulp.task('cssCompile', function() {
  return gulp.src(['bower_components/normalize-css/normalize.css', 'assets/css/styles.css'])
    .pipe(concat('compiled.css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('jsCompile', function() {
  return gulp.src([
      'bower_components/jquery/dist/jquery.js', 'assets/js/vendor/*.js', 'assets/js/main.js'
    ])
    .pipe(concat('compiled.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe( gulp.dest('assets/js'));
});

gulp.task('html', function () {
    return gulp.src('src/index-dev.php')
               .pipe(processhtml(opts))
               .pipe(gulp.dest('dist/index.php'));
});

gulp.task('default', ['watch']);

gulp.task('prod', ['watch', 'cssCompile', 'jsCompile']);



