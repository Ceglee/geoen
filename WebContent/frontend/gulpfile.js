var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('init', ['scss-to-css']);

gulp.task('scss-to-css', function() {
	return gulp.src('scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'))
});
