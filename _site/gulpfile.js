const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const cp = require('child_process');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');

const jekyllCommand = /^win/.test(process.platform) ? 'jekyll.bat' : 'jekyll';

/*
 * Build the Jekyll Site
 * runs a child process in node that runs the jekyll commands
 */
gulp.task('jekyll-build', done => cp.spawn(jekyllCommand, ['build'], { stdio: 'inherit' }).on('close', done));

/*
 * Rebuild Jekyll & reload browserSync
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], () => {
	browserSync.reload();
});

/*
 * Build the jekyll site and launch browser-sync
 */
gulp.task('browser-sync', ['jekyll-build'], () => {
	browserSync({
		server: {
			baseDir: '_site',
		},
	});
});

/*
* Compile and minify sass
*/
gulp.task('sass', () => {
	gulp
		.src('_sass/*.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('assets/css/'));
});

/*
* Compile fonts
*/
gulp.task('fonts', () => {
	gulp
		.src('src/fonts/**/*.{ttf,woff,woff2}')
		.pipe(plumber())
		.pipe(gulp.dest('assets/fonts/'));
});

/*
 * Minify images
 */
gulp.task('imagemin', () => gulp
	.src('src/img/**/*.{jpg,png,gif}')
	.pipe(plumber())
	.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
	.pipe(gulp.dest('assets/img/')));

/**
 * Compile and minify js
 */
gulp.task('js', () => gulp
	.src('src/js/**/*.js')
	.pipe(plumber())
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/js/')));

gulp.task('watch', () => {
	gulp.watch('src/styles/*.scss', ['sass', 'jekyll-rebuild']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/fonts/**/*.{tff,woff,woff2}', ['fonts']);
	gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
	gulp.watch(['*html', '_includes/*html', '_layouts/*.html'], ['jekyll-rebuild']);
});

gulp.task('default', ['js', 'sass', 'fonts', 'browser-sync', 'watch']);
