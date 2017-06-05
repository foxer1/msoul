var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs');
    autoprefixer = require('gulp-autoprefixer');
    del = require('del');

gulp.task('app-sass', function () {
    gulp.src('src/app/scss/main.scss')
       .pipe(sass())
       .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
       .pipe(gulp.dest('src/dist/css'))
});

gulp.task('libs-sass', function () {
    gulp.src(['node_modules/foundation-sites/assets/foundation.scss'])
        .pipe(sass({
            includePaths: ['node_modules/foundation-sites/scss']
    }))
        .pipe(gulp.dest('src/dist/css'))
});

gulp.task('libs-scripts', function() {
    return gulp.src([ 
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/foundation-sites/dist/js/foundation.min.js',

        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('src/dist/js')); // Выгружаем в папку app/js
});

gulp.task('app-scripts', function() {
    return gulp.src([ 
        'src/app/js/script.js'

        ])
        .pipe(concat('app.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(gulp.dest('src/dist/js')); // Выгружаем в папку app/js
});


gulp.task('clean', function() {
    return del.sync('src/dist'); // Удаляем папку dist перед сборкой
});

gulp.task('watch', function () {
    gulp.watch('src/app/scss/**/*.scss', ['app-sass']);
    gulp.watch('src/app/js/**/*.js', ['app-scripts']);
});

gulp.task('build', ['clean', 'app-sass', 'libs-sass', 'app-scripts', 'libs-scripts'], function() {

});

gulp.task('default', ['watch', 'build']);
gulp.task('clear', function () {
    return cache.clearAll();
})