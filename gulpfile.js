const {series,src,dest,watch,parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');

const paths = {
    srcImagenes: 'src/img/**/*',
    srcScss: 'src/scss/**/*.scss',
    dstImagenes: './build/img',
    dstCss: './build/css',
}

//Función que compila sass
function css(){
    return src(paths.srcScss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest(paths.dstCss))
};

function minificarcss(){
    return src(paths.srcScss)
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(dest(paths.dstCss))
};

function imagenes(){
    return src(paths.srcImagenes)
        .pipe(imagemin())
        .pipe(dest(paths.dstImagenes))
       // .pipe(notify({message: 'Imagen Minificada'}))
}

function versionWebp(){
    return src(paths.srcImagenes)
    .pipe(webp())
    .pipe(dest(paths.dstImagenes))
}

function watchArchivos(){
    watch(paths.srcScss,css);
};

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series(css,imagenes, versionWebp,watchArchivos)