var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('scripts', function () {
    del.sync('build/**')

    return gulp.src([
        'bower_components/jquery/dist/jquery.js'
    ])
        .pipe(uglify())
        .pipe(gulp.dest('build'))
})
