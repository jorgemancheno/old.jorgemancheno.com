'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./static/s/sass/site.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/s'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./static/s/sass/*.sass', ['sass']);
});
