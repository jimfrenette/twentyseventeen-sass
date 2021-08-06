'use strict';

var gulp         = require('gulp'),
    cssnano      = require('gulp-cssnano'),
    sass         = require('gulp-sass')(require('sass'));

var supported = [
    'last 2 versions'
];

gulp.task('css', function(){
    return gulp.src(['src/sass/**/*.scss'])
        .pipe(sass())
        .pipe(cssnano({
            autoprefixer: {browsers: supported, add: true}
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
    gulp.watch('src/sass/**/*.scss', ['css']);
    // Other watchers
});

gulp.task('default', ['watch']);