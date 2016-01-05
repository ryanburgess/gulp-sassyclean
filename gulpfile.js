var gulp = require('gulp');
var eslint = require('gulp-eslint');
var jsonlint = require('gulp-jsonlint');
var jshintStyle = require('jshint-stylish');
var nodeunit = require('gulp-nodeunit');

gulp.task('lint', function () {
  return gulp.src(['lib/**/*'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

var gulpsassyclean = require('./index.js');
gulp.task('sassyclean', function () {
  return gulp.src(['./sass/*.scss'])
    .pipe(gulpsassyclean({
      remove: false,
      days: null
    }));
});

// JSON Lint
gulp.task('jsonlint', function() {
  return gulp.src(['./*.json'])
    .pipe(jsonlint())
    .pipe(jsonlint.reporter(jshintStyle));
});

// nodeunit tests
gulp.task('nodeunit', function () {
  gulp.src('tests/**/*.js')
    .pipe(nodeunit({
      reporter: 'junit',
      reporterOptions: {
        output: 'test-output'
      }
    }));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['./*.json'], ['jsonlint']);
  gulp.watch(['./lib/**/*'], ['lint']);
});
gulp.task('default', ['watch']);
gulp.task('test', ['lint', 'jsonlint']);
