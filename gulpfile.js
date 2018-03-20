var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    pug = require('gulp-pug'),
    sass  = require('gulp-sass'),
    uglify  = require('gulp-uglify'),
    rename = require('gulp-rename');


var configuration = {
  paths: {
    src: {
      pug: './src/pages/**/*.pug',
      scss:'./src/sass/**/*.scss',
      js: './src/js/**/*.js',
      font: './src/fonts/**.*',
      bower: './src/bower_components/**/*.*',
      img: './src/img/**/*.*'
    },
    dist: './build/public'
  }
};

gulp.task('serve', ['sass','pug','img','js','fonts','bower'], function() {
  browserSync.init({
    server: {
      baseDir: 'build/public',
      index : 'landing.html'
   }
  });

  gulp.watch(configuration.paths.src.scss, ['sass']).on('change', browserSync.reload);
  gulp.watch(configuration.paths.src.pug,['pug']).on('change', browserSync.reload);
  gulp.watch("src/img/**.*",['img']).on('change', browserSync.reload);
  gulp.watch(configuration.paths.src.bower,['bower']).on('change', browserSync.reload);
  gulp.watch(configuration.paths.src.js,['js']).on('change', browserSync.reload);
  gulp.watch(configuration.paths.src.font,['fonts']).on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src(configuration.paths.src.scss)
    .pipe(sass())
    .pipe(gulp.dest(configuration.paths.dist + '/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(configuration.paths.dist + '/js'));
});

gulp.task('pug', function() {
  gulp.src('./src/pages/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(configuration.paths.dist))
  .pipe(rename({
    extname: ".php"
  }))
  .pipe(gulp.dest(configuration.paths.dist))
});

gulp.task('img', function() {
  return gulp.src(configuration.paths.src.img)
    .pipe(gulp.dest(configuration.paths.dist + '/img'));
});

gulp.task('bower', function() {
  return gulp.src(configuration.paths.src.bower)
    .pipe(gulp.dest(configuration.paths.dist + '/bower_components'));
});

gulp.task('fonts', function() {
  return gulp.src(configuration.paths.src.font)
    .pipe(gulp.dest(configuration.paths.dist  + '/fonts'));
});

gulp.task('default', ['serve']);