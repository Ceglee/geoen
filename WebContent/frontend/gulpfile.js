var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var webpack = require('webpack-stream');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('init', ['build-openlayers', 'build-vue', 'scss-to-css', 'resolve-dependencies']);

gulp.task('scss-to-css', function() {
	return gulp.src('scss/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('build/css'))
});

gulp.task('js-transpilation', function() {
	return gulp.src('js/**/*.js')
	.pipe(babel({
		presets: ['es2015']
     }))
    .pipe(gulp.dest('build/js/transpiled'));
});


gulp.task('resolve-dependencies', ['js-transpilation'], function() {
	return gulp.src('build/js/transpiled/root.js')
	.pipe(sourcemaps.init())
	.pipe(webpack({
		output: {
	        filename: 'main.js',
	    }
	}))
	.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js/resolved'));
});

gulp.task('build-vue', function() {
	return gulp.src('node_modules/vue/dist/*')
	.pipe(gulp.dest('build/vendor/vue'));
})

gulp.task('build-openlayers', function() {
	return gulp.src('node_modules/openlayers/dist/*')
	.pipe(gulp.dest('build/vendor/openlayers'));
})
