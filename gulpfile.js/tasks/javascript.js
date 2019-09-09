'use strict';

var gulp = require('gulp');

gulp.task('javascript', function(done) {
	console.log("javascript:start");

	console.log("javascript:done");
	done();
});

gulp.task('javascript', gulp.series('javascript'));
