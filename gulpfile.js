const {series} = require('gulp');
const sass = require('gulp-sass');

//Función que compila sass
function css(done){
    console.log('Compilando SASS...')
    done();
}

exports.css = css;