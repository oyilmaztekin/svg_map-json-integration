var gulp = require('gulp'),					
	size = require('gulp-size'),
	connect = require('gulp-connect'),	
	watch = require('gulp-watch'),	
  stylus = require('gulp-stylus'),
  imageop = require('gulp-imagemin'),  
	jade = require('gulp-jade');


var stylSources = ['styl/main.styl']
var exportStyl = '../build/css/';

//live reload
gulp.task('connect', function() {
  connect.server({
    root: '../build/',
    livereload: true
  });
});

//html
gulp.task('html', function () {
  gulp.src('*.jade')
  	.pipe(size())   
  	.pipe(jade( {pretty:true}))    
  	//.pipe(uglify())	 	
  	.pipe(gulp.dest('../build/'))
    .pipe(connect.reload());
});

gulp.task('stylus', function () {
  gulp.src(stylSources)
    .pipe(stylus())
    .pipe(gulp.dest(exportStyl))
    .pipe(connect.reload());
});

gulp.task('images', function(cb) {
    gulp.src(['assets/**/*.png','assets/**/*.jpg','assets/**/*.gif','assets/**/*.jpeg']).pipe(imageop({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]            
        })).pipe(size()).pipe(gulp.dest('../build/assets')).on('end', cb).on('error', cb);
});

//watch
 gulp.task('watch', function () {
  gulp.watch(['jade/*.jade'],['jade-inheritance']);  
  gulp.watch(['*.jade'], ['html']);
  gulp.watch(['js/*.js'], ['js']);  
  gulp.watch('assets',['images']);  
  gulp.watch([stylSources],['stylus']);
});

gulp.task('default',['connect','watch','html','stylus','images']);