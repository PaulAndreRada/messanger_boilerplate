var gulp = require( 'gulp' ),
    server = require( 'gulp-develop-server' ),
    livereload = require( 'gulp-livereload' ),
    webpack = require('webpack'),
    webpackStream = require('webpack-stream'),
    reload = require('gulp-hot-reload'),
    gutil = require('gulp-util'),
    path = require('path')

// report the stats after the build is done
const buildDone = (err, stats) => {
  if(err) throw new gutil.PluginError("webpack", err);
  gutil.log('[webpack]', stats.toString({
    colors: true,
    chunkModules: false,
    assets: false,
    version: false,
    hash: false
  }))
}

// get config files
var serverConfig = require('./webpack.server.config.js')
var frontendConfig = require('./webpack.config.js')

// builds the backend files - what about my jsx?
gulp.task('build-backend', () => {
    gulp.src('./server.js')
      .pipe(webpackStream(serverConfig, webpack, buildDone))
      .pipe(reload({
        port: 1337,
        react: true,
        config: path.join(__dirname, 'webpack.config.js')
    }))
})

// watch for changes on the js, build the server
gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['build-backend'])
})

// distribute backend
gulp.task('dist-backend', function () {
  process.env.NODE_ENV = 'production'
  gulp
    .src('./src/server.js')
    .pipe(webpackStream(serverConfig, webpack, buildDone))
    .pipe(gulp.dest('build'))
})

// distribute frontend
gulp.task('dist-frontend', function () {
  process.env.NODE_ENV = 'production'
  gulp
    .src('./src/application.js')
    .pipe(webpackStream(frontendConfig, webpack, buildDone))
    .pipe(gulp.dest('build/static'))
})

//for production only: use to build your distribiution packages
gulp.task('dist', ['dist-backend', 'dist-frontend'], function() {

})

// run default
gulp.task('default', ['build-backend', 'watch'], function () {
  gutil.log('watch')
})
