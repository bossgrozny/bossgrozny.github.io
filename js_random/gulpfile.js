var gulp = require('gulp');                         
var autoprefixer = require('gulp-autoprefixer');   // ohiriga sufix qoyadi 
var csso = require('gulp-csso');                   //  bir qatorga chiqarib berishi uchun 
var rename = require("gulp-rename");                // min qo'shadi 
var gcmq = require('gulp-group-css-media-queries');  // medialarni ohiriga joylashtiradi va bir hil bo'gan medialrni bita qilib beradi 
var watch = require('gulp-watch');                      // css kuzatib boradi !    
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
// var sass = require('gulp-sass');
var less = require('gulp-less');

gulp.task('style', style);
function style (){
    return gulp.src('./app/precss/style.less')
            .pipe(sourcemaps.init())
            .pipe(plumber())
            // .pipe(sass().on('error', sass.logError))
            .pipe(less())
            .pipe(autoprefixer({
                browsers: ['last 50 versions'],
                cascade: false
            }))  
            .pipe(gcmq())
            .pipe(gulp.dest('./app/css')) 
            .pipe(csso()) 
            .pipe(rename({
                suffix: ".min",
              }))
           .pipe(sourcemaps.write('.'))   
           .pipe(gulp.dest('./app/css'))   
           .pipe(browserSync.stream());
}

gulp.task('watch', function () {
    watch("./app/precss/**/*.less", style )
})
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task("default", gulp.parallel("style", "watch", "server"));


