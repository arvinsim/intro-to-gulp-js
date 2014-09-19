var Multistream = require('multistream');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('compile_js', function() {
    var combined = Multistream([
        gulp.src('./scripts/app.js'),
        uglify(),
        gulp.dest('./scripts/app.min.js')
    ]);

    // any errors in the above streams will get caught
    // by this listener, instead of being thrown:
    combined.on('error', console.error.bind(console));

    return combined;
});

gulp.task('default', function() {
    gulp.watch('./scripts/app.js', ['ww1compile_js']);
});
