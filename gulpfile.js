'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// Sass
gulp.task('sass:build', function () {
  return gulp.src([
      './node_modules/normalize.css/normalize.css',
      './node_modules/flexslider/flexslider.css',
      './src/css/sass/site.sass'
    ])
    .pipe(plumber(function(error) {
      console.log(error)
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('site.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  const watchSass = gulp.series(['sass:build'])
  gulp.watch('./src/css/sass/*.sass', watchSass);
});


// JS
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


// Images
gulp.task('images:build', function () {
  return gulp.src('./src/images/**/*')
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('images:watch', function() {
  const watchImages = gulp.series(['images:build'])
  gulp.watch('./src/images/**/*', watchImages);
});


gulp.task('serve', gulp.series('sass:build', 'js:build', 'images:build', gulp.parallel('sass:watch', 'js:watch', 'images:watch')));
