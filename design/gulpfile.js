var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css');

var hostname = 'localhost';

gulp.task('express', function() {
	var express = require('express');
	var app = express();
	app.use(require('connect-livereload')({port: 35729}));
	app.use(express.static(__dirname + '/app'));
	app.listen('8000', hostname);
});

var tinylr;
gulp.task('livereload', function() {
	tinylr = require('tiny-lr')();
	tinylr.listen(35729);
});

function notifyLiveReload(event) {
	var fileName = require('path').relative(__dirname, event.path);
	tinylr.changed({
		body: {
			files: [fileName]
		}
	});
}

gulp.task('watch', function() {
	gulp.watch('app/css/*.css', notifyLiveReload);
	gulp.watch('app/*.html', notifyLiveReload);
});	

gulp.task('default', [/*'styles',*/ 'express', 'livereload', 'watch'], function() {

});