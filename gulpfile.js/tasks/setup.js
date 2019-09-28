'use strict';

var gulp = require('gulp');

gulp.task('copy-mbfw-scss', function(done) {
	gulp.src('./node_modules/mb.mbfw.scss/main.scss')
		.pipe(gulp.dest('./scss'));
	done();
});

gulp.task('setup', gulp.series('copy-mbfw-scss'));
