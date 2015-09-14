var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('jade-templates', function() {

    gulp.src('./client/**/*.jade')
        .pipe(jade({ }))
        .pipe(gulp.dest('./public/'))
});
gulp.task('default', ['jade-templates']);