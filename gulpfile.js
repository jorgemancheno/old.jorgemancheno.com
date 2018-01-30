'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('sass:build', function () {
  return gulp.src('./src/css/sass/site.sass')
    .pipe(plumber(function(error) {
      console.log(error)
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  const watchSass = gulp.series(['sass:build'])
  gulp.watch('./src/css/sass/*.sass', watchSass);
});

gulp.task('js:build', function() {
  return gulp.src([
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/jquery_lazyload/jquery.lazyload.js',
      './node_modules/flexslider/jquery.flexslider.js',
      './src/js/*.js'
    ])
    .pipe(plumber(function(error) {
      console.log(error)
    }))
    .pipe(concat('site.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('js:watch', function() {
  const watchJS = gulp.series(['js:build'])
  gulp.watch('./src/js/*.js', watchJS);
});

gulp.task('serve', gulp.series('sass:build', 'js:build', gulp.parallel('sass:watch', 'js:watch')));
