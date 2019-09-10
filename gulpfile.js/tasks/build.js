'use strict';

var gulp = require('gulp');

// Builds the documentation and framework files
gulp.task('build', gulp.series('scss','javascript'));
