var gulp = require( 'gulp' ),
    server = require( 'gulp-develop-server' ),
    livereload = require( 'gulp-livereload' ),
    webpack = require('webpack-stream');

// translate (bable) and bundle all the js files to one file
// the same config file is used by hot reload
gulp.task('webpack', function() {
  return gulp.src('app/main.jsx')
    .pipe(webpack(  require('./webpack.config.js')  ))
    .pipe(gulp.dest('./build/'));
});

// files that tell livereload to restart the server
var serverFiles = [
  './server.js',
];
// server options
var options = {
  path: './server.js'
};
// start the server
gulp.task( 'server:start', function() {
    server.listen( options, livereload.listen );
});

// If server scripts change, restart the server and then livereload.
gulp.task( 'default', [ 'webpack','server:start' ], function() {

    function restart( file ) {
        server.changed( function( error ) {
            if( ! error ) livereload.changed( file.path );
        });
    }

    gulp.watch( serverFiles ).on( 'change', restart );
});
