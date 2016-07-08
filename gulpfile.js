var gulp = require( 'gulp' ),
    server = require( 'gulp-develop-server' ),
    livereload = require( 'gulp-livereload' ),
    webpack = require('gulp-webpack');

// translate (bable) and bundle all the js files to one file
gulp.task('webpack', function() {
    return gulp.src('components/main.jsx')
      .pipe(webpack(  require('./webpack.config.js')  ))
      .pipe(gulp.dest('./public/'));
});

// files that tell livereload to restart the server
var serverFiles = [
  './server.js',
  './controllers/*.js'
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
gulp.task( 'default', [ 'webpack', 'server:start' ], function() {

    function restart( file ) {
        server.changed( function( error ) {
            if( ! error ) livereload.changed( file.path );
        });
    }

    gulp.watch( serverFiles ).on( 'change', restart );
});
