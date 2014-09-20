var gulp = require('gulp'),
    minifyCss = require("gulp-minify-css");
 
gulp.task('minify-css', function () {
    gulp.src('./css/src/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('./css/min/'));
});

gulp.task('default', ['minify-css']);