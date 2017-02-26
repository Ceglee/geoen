var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('init', ['scss-to-css', 'build-openlayers']);

gulp.task('scss-to-css', function() {
	return gulp.src('scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'))
});


gulp.task('build-openlayers', function() {
	return gulp.src('node_modules/openlayers/dist/*')
	.pipe(gulp.dest('vendor/openlayers'))
})
