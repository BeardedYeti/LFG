var gulp = require('gulp');
var durandal = require('gulp-durandal');
var jasmine = require('gulp-jasmine');

gulp.task('build-portal', function () {
    durandal({
        baseDir: 'app',
        main: 'main.js',
        output: 'main-built.js',//because we have a main-built.js file
        almond: true,//almond is running instead of require
        minify: false
    }).pipe(gulp.dest('app'));
});
gulp.task('default', function () {
    return gulp.src('spec/test.js')
    .pipe(jasmine());
});