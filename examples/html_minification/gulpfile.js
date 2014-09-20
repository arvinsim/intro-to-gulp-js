var gulp = require('gulp'),
    minifyHtml = require('gulp-minify-html'),
    rename = require('gulp-rename');
 
gulp.task('minify-html', function () {
    gulp.src('./index.html')
        .pipe(minifyHtml())
        .pipe(rename('index.min.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['minify-html']);