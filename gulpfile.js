var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
plugins.connect = require('gulp-connect');
plugins.jshint = require('gulp-jshint');

var port = 4000;

gulp.task('styles', function() {
    return gulp.src('src/sass/main.scss')
        .pipe(plugins.rubySass({ style: 'compressed' }))
        .pipe(plugins.autoprefixer('last 15 version'))
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(gulp.dest('dest/css'))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'Styles task complete.' }));
});

gulp.task('copyCSS', ['styles'], function() {
    return gulp.src('/')
        .pipe(plugins.exec('cp -R dest/css/* _site/dest/css/', { silent: true }))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'CSS has been copied.' }));
});

gulp.task('scripts', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.concat('main.js'))
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('dest/js'))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'Scripts task complete.' }));
});

gulp.task('copyJS', ['scripts'], function() {
    return gulp.src('/')
        .pipe(plugins.exec('cp -R dest/js/* _site/dest/js/', { silent: true }))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'JS has been copied.' }));
});

gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        // .pipe(plugins.newer('dest/images'))
        .pipe(plugins.imagemin())
        // .pipe(plugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dest/images'))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'Images task complete.' }));
});

gulp.task('copyImages', ['images'], function() {
    return gulp.src('/')
        .pipe(plugins.exec('cp -R dest/images/* _site/dest/images/', { silent: true }))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'Images have been copied.' }));
});

gulp.task('clean', function() {
    return gulp.src(['dest/css', 'dest/js', 'dest/images'], {read: false})
        .pipe(plugins.clean())
        .pipe(plugins.notify({ message: 'Clean task complete.' }));
});

gulp.task('jekyll', ['images', 'styles', 'scripts'], function() {
    return gulp.src('/')
        .pipe(plugins.exec('jekyll build --drafts', { silent: true }))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'Jekyll task complete.' }));
});

gulp.task('connect', plugins.connect.server({
    root: ['_site'],
    port: port,
    livereload: true,
    open: {
        browser: 'Google Chrome'
    }
}));

gulp.task('watch', function() {
    gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '_posts/*.md', '_drafts/*.md', 'resume/index.md', 'labs/index.html'], ['jekyll'])
    gulp.watch('src/sass/**/*.scss', ['styles', 'copyCSS']);
    gulp.watch('src/js/**/*.js', ['scripts', 'copyJS']);
    gulp.watch('src/images/**/*', ['images', 'copyImages']);
});

gulp.task('default', ['clean', 'images', 'styles', 'scripts', 'jekyll', 'connect', 'watch']);
