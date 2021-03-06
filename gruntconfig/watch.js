'use strict';

var config = require('./config');

var watch = {
  resources: {
    files: [
      config.src + '/**/*',
      '!' + config.src + '/**/*.scss',
      '!' + config.src + '/**/*.js'
    ],
    tasks: [
      'copy:dev'
    ]
  },

  stylesheets: {
    files: [
      config.src + '/htdocs/**/*.scss'
    ],
    tasks: [
      'postcss:dev'
    ]
  },

  test: {
    files: [
      config.test + '/**/*'
    ],
    tasks: [
      'jshint:test',

      'browserify:test',
      'browserify:bundle',
      'copy:test'
    ]
  },

  scripts: {
    files: [
      config.src + '/htdocs/**/*.js'
    ],
    tasks: [
      'jshint:dev',
      'browserify:index',
      'browserify:bundle'
    ]
  },

  gruntfile: {
    files: [
      'Gruntfile.js',
      'gruntconfig/**/*.js'
    ],
    tasks: [
      'jshint:gruntfile'
    ]
  },

  livereload: {
    options: {
      livereload: config.liveReloadPort
    },
    files: [
      config.build + '/' + config.src + '/htdocs/**/*'
    ]
  }
};

module.exports = watch;
