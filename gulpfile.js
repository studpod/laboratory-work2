const gulp = require('gulp');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function () {
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('web/**/*.ts', gulp.series('scripts'));
});

gulp.task('default', gulp.series('scripts', 'watch'));
