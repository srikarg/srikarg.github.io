var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var port = 4000;

gulp.task('styles', function() {
    return gulp.src('src/assets/css/**/*.css')
        .pipe(plugins.concat('main.css'))
        .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'Styles task complete.' }));
});

gulp.task('copyCSS', ['styles'], function() {
    return gulp.src('/')
        .pipe(plugins.exec('cp -R dist/assets/css/* _site/dist/assets/css/', { silent: true }))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'CSS has been copied.' }));
});

gulp.task('scripts', function() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.concat('main.js'))
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'Scripts task complete.' }));
});

gulp.task('copyJS', ['scripts'], function() {
    return gulp.src('/')
        .pipe(plugins.exec('cp -R dist/assets/js/* _site/dist/assets/js/', { silent: true }))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'JS has been copied.' }));
});

gulp.task('images', function() {
    return gulp.src('src/assets/img/**/*')
        .pipe(plugins.newer('dist/assets/img'))
        .pipe(plugins.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'Images task complete.' }));
});

gulp.task('copyImages', ['images'], function() {
    return gulp.src('/')
        .pipe(plugins.exec('cp -R dist/assets/img/* _site/dist/assets/img/', { silent: true }))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'Images have been copied.' }));
});

gulp.task('clean', function() {
    return gulp.src(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], {read: false})
        .pipe(plugins.clean())
        .pipe(plugins.notify({ message: 'Clean task complete.' }));
});

gulp.task('jekyll', ['images', 'styles', 'scripts'], function() {
    return gulp.src('/')
        .pipe(plugins.exec('jekyll build', { silent: true }))
        .pipe(plugins.connect.reload())
        .pipe(plugins.notify({ message: 'Jekyll task complete.' }));
});

gulp.task('connect', plugins.connect.server({
    root: '_site/',
    port: port,
    livereload: true,
    open: {
        browser: 'Google Chrome'
    }
}));

gulp.task('watch', function() {
    gulp.watch(['index.html', '_layouts/*.html', '_posts/*.markdown', 'resume/index.markdown', 'contact/index.html', 'labs/index.html'], ['jekyll'])
    gulp.watch('src/assets/css/**/*.css', ['styles', 'copyCSS']);
    gulp.watch('src/assets/js/**/*.js', ['scripts', 'copyJS']);
    gulp.watch('src/assets/img/**/*', ['images', 'copyImages']);
});

gulp.task('default', ['clean', 'images', 'styles', 'scripts', 'jekyll', 'connect', 'watch']);
