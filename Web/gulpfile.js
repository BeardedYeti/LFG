var gulp = require('gulp');
var durandal = require('gulp-durandal');

gulp.task('build-portal', function () {
    durandal({
        baseDir: 'app',
        main: 'main.js',
        output: 'main-built.js',//because we have a main-built.js file
        almond: true,//almond is running instead of require
        minify: false
    }).pipe(gulp.dest('app'));
});