var gulp = require('gulp');
var durandal = require('gulp-durandal');

gulp.task('build-portal', function () {
    durandal({
        baseDir: 'app',
        main: 'main.js',
        output: 'main-built.js',
        almond: true,
        minify: false
    }).pipe(gulp.dest('app'));
});