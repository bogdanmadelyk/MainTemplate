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
    autoprefixer   = require('gulp-autoprefixer');

// Скрипты проекта

gulp.task('common-js', function() {
    return gulp.src([
        'app/js/common.js',
        ])
    .pipe(plumber())
    .on('error', function(err) {
        gutil.log(err);
        this.emit('end');
    })
    .pipe(concat('common.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js'));

});

gulp.task('js', ['common-js'], function() {
    return gulp.src([
        'app/libs/jquery/dist/jquery.min.js',

        // MODAL WINDOW
        'app/libs/Magnific-Popup-master/dist/jquery.magnific-popup.min.js',

        // SLIDER
        'app/libs/slick-carousel/slick/slick.min.js',
        'app/libs/bxslider-4/dist/vendor/jquery.easing.1.3.js',
        
        'app/js/common.min.js',
        ])
    .pipe(concat('scripts.min.js'))
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
    .pipe(sass())
    .on('error', function(err) {
        gutil.log(err);
        this.emit('end');
    })    
    .pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
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

    var buildFonts = gulp.src([
        'app/fonts/**/*',
        ]).pipe(gulp.dest('dist/fonts'));

});


gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);