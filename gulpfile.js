var gulp           = require('gulp'),
    gutil          = require('gulp-util' ),
    sass           = require('gulp-sass'),
    browserSync    = require('browser-sync'),
    concat         = require('gulp-concat'),
    uglify         = require('gulp-uglify'),
    rename         = require('gulp-rename'),
    del            = require('del'),
    imagemin       = require('gulp-imagemin'),
    cache          = require('gulp-cache'),
    plumber        = require('gulp-plumber'),
    autoprefixer   = require('gulp-autoprefixer'),
    pug            = require('gulp-pug'),
    notify         = require("gulp-notify");

// Скрипты проекта
gulp.task('pug', function() {
    return gulp.src('app/pug/pages/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .on("error", notify.onError(function(error) {
            return "Message to the notifier: " + error.message;
        }))
        .pipe(gulp.dest('app'));
});
gulp.task('js', function() {
    return gulp.src(['app/js/vendor/*.js'])
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compact'}))
    .on('error', function(err) {
        gutil.log(err);
        this.emit('end');
    })    
    .pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'js', 'browser-sync', 'pug'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/pug/**/*.pug', ['pug']);
    gulp.watch(['libs/**/*.js', 'app/js/common.js'], ['js']);
    gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('imagemin', function() {
    return gulp.src('app/img/**/*')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/img')); 
});

gulp.task('build', ['removedist', 'imagemin', 'sass', 'js'], function() {

    var buildFiles = gulp.src([
        'app/*.html',
        'app/.htaccess',
        ]).pipe(gulp.dest('dist'));

    var buildCss = gulp.src([
        'app/css/main.min.css',
        ]).pipe(gulp.dest('dist/css'));

    var buildJs = gulp.src([
        'app/js/scripts.min.js',
        ]).pipe(gulp.dest('dist/js'));

    var buildHtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist/'));

    var buildCommonJs = gulp.src([
        'app/js/main.js',

    ]).pipe(gulp.dest('dist/js'));

    var buildFonts = gulp.src([
        'app/fonts/**/*',
        ]).pipe(gulp.dest('dist/fonts'));
});


gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);