var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefixer = require('gulp-autoprefixer');

// Styles
gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
      .pipe(sourcemaps.init())
        .pipe(prefixer("last 2 versions", "> 1%", "ie 8"))
        .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./css/'));
});

// Watch
gulp.task('default', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
});