const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

function bs() { 
  serveSass(); 
  browserSync.init({
      server: {
          baseDir: "./src/"
      }
  });
  watch("./src/*.html").on('change', browserSync.reload);
  watch("./src/sass/**/*.sass", serveSass);
  watch("./src/sass/**/*.scss", serveSass);
  watch("./src/js/*.js").on('change', browserSync.reload);
};

function serveSass() {
  return src('./src/sass/**/*.sass', './sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest('./src/css'))
    .pipe(browserSync.stream()); 
};


function buildCSS(done) {
    src('./src/css/**/**.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(dest('./dist/css'));
    done();
}
  
function buildJS(done) {
    src(['./src/js/**.js', '!./src/js/**.min.js'])
      .pipe(minify({ext:{
              min:'.js'
          }
      }))
      .pipe(dest('./dist/js'));
    src('./src/js/**.min.js').pipe(dest('./dist/js'));
    done();
}

function html(done) {
  src('./src/*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(dest('./dist'));
  done();
}


exports.serve = bs;
exports.build = series(buildCSS, buildJS, html);

