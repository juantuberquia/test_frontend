const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');

// Tarea para compilar Less
gulp.task('less', function () {
  return gulp.src('./src/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

// Tarea para compilar Handlebars
gulp.task('handlebars', function () {
  return gulp.src('./src/partials/*.hbs')
    .pipe(handlebars())
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

// Tarea para copiar el archivo JSON
gulp.task('copy-json', function () {
  return gulp.src('./src/data.json')
    .pipe(gulp.dest('./dist'));
});

// Tarea para inicializar el servidor y observar cambios
gulp.task('serve', function () {
  browserSync.init({
    server: './dist'
  });

  gulp.watch('./src/less/**/*.less', gulp.series('less'));
  gulp.watch('./src/**/*.hbs', gulp.series('handlebars'));
  gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
  gulp.watch('./src/data.json', gulp.series('copy-json', browserSync.reload));
});

// Tarea por defecto
gulp.task('default', gulp.series('less', 'copy-json', "handlebars", 'serve'));
