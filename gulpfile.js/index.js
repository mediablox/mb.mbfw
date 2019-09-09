'use strict';

// Register dependencies
var gulp = require('gulp');
var forwardReference = require('undertaker-forward-reference');
var requireDir = require('require-dir');

// Make Gulp accepting reference to tasks that are not declared yet, like in v3.
gulp.registry(forwardReference());

// Load task partials
requireDir('./tasks');

// Declares the default task
gulp.task('default', gulp.series('build'));
