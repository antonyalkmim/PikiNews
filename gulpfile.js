const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    scripts: [
        'public/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
        'public/bower_components/jquery/dist/jquery.js',
        'public/bower_components/bootstrap/dist/js/bootstrap.js'
    ],
    css : [
        "public/bower_components/html5-boilerplate/dist/css/normalize.css",
        "public/bower_components/html5-boilerplate/dist/css/main.css",
        "public/bower_components/bootstrap/dist/css/bootstrap.css",
        "public/bower_components/bootstrap/dist/css/bootstrap-theme.css",
        "public/bower_components/components-font-awesome/css/font-awesome.css",
        "public/css/main.css"
    ]
};

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
            //.pipe(uglify())
            .pipe(concat('all.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/build'));
});

gulp.task('css', () => {
    return gulp.src(paths.css)
        .pipe(sourcemaps.init())
            //.pipe(uglifycss())
            .pipe(concat('all.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/build'));

});

gulp.task('default', ['scripts', 'css']);