var gulp = require('gulp'),
connect = require('gulp-connect'),
gutil = require('gulp-util'),
concat = require('gulp-concat'),
sass = require('gulp-sass'),
jade = require('gulp-jade');

gulp.task('connect', function(){
  connect.server({
    port:9000, 
    livereload: true, 
    root:'./dist/'
  })
});

gulp.task('jade', function() {
  gulp.src('source/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .on('error', gutil.log)
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload())
});

gulp.task('sass', function() {
  gulp.src('source/*.sass')
    .pipe(sass()
    .on('error', sass.logError))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(connect.reload())
});

gulp.task('fonts', function() {
  gulp.src('source/fonts/**/*')
    .on('error', gutil.log)
    .pipe(gulp.dest('./dist/fonts/'))
    .pipe(connect.reload())
});

gulp.task('img', function() {
  gulp.src('source/images/**/*')
    .on('error', gutil.log)
    .pipe(gulp.dest('./dist/images/'))
    .pipe(connect.reload())
});

gulp.task('js', function() {
  gulp.src('source/*.js')
    .on('error', gutil.log)
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload())
});

gulp.task('js-libs', function() {
  gulp.src('source/libs/**/*.js')
    .on('error', gutil.log)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload())
});

gulp.task('watch', function(){
  gulp.watch('source/**/*.jade', ['jade'])
  gulp.watch('source/**/*.sass', ['sass'])
  gulp.watch('source/fonts/**/*', ['fonts'])
  gulp.watch('source/images/**/*', ['img'])
  gulp.watch('source/**/*.js', ['js'])
  gulp.watch('source/libs/**/*', ['js-libs'])
  gulp.watch('source/**/*', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', tasks done.');
  });
});

gulp.task('default', ['jade', 'sass', 'fonts', 'img', 'js', 'js-libs', 'watch', 'connect']);
