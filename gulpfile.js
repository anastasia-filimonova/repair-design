const {src, dest, watch} = require('gulp')
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

function bs() { 
  serveSass(); 
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./js/*.js").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass).on('change', browserSync.reload);
};

function serveSass() {
  return src('./sass/*.sass')
  .pipe(sass())
  .pipe(dest('./css'))
  .pipe(browserSync.stream()); 
};

exports.serve = bs;

function mincss() {
  return src(["./*.css" , '!./*.min.css'])
  .pipe(rename({suffix: '.min'}))
  .pipe(cleanCSS())
  .pipe(dest('./'));
};