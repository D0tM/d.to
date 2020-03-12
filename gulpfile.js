// Gulp stuff
const {
	src,
	dest,
	task,
	watch,
	parallel,
} = require('gulp');

// CSS related plugins
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


// JS related 
const uglify = require('gulp-uglify');
const babelify = require('babelify');
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");

// Utilities
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const chalk = require('chalk');


function css(done) {
	src('./src/assets/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			errLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on('error', console.error.bind(console))
		.pipe(autoprefixer())
		.pipe(rename({
			basename: 'style' + '_' + Math.random().toString(20).substr(2, 9),
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('/'))
		.pipe(dest('./dist/css'))
	done();
};

function js(done){
	browserify({
			entries: ["./src/assets/js/main.js"]
	})
	.transform("babelify", {
		presets: [
			"@babel/preset-env"
		]
	})
	.bundle()
	.pipe(source('main' + '_' + Math.random().toString(20).substr(2, 9) + '.min.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write('/'))
	.pipe(dest("./dist/js/"))
	done();
}

function fonts(done) {
	src('./src/assets/fonts/*.{eot,svg,ttf,woff,woff2}')
		.pipe(dest('./dist/fonts'))
	done();
};


function images(done) {
	src('./src/assets/images/**/*.*')
		.pipe(dest('./dist/images'))
	done();	
}

function watchFiles() {
	watch('./src/assets/scss/**/*.scss', css);
	watch('./src/assets/js/**/*.js', js);
	console.log(chalk.bgGreen.black.bold('Watching files for changes...'));
}

task("watch", watchFiles);
task("build", parallel(
	css,
	js,
	fonts,
	images
));
task("default", parallel(
	css,
	js,
	fonts,
	images
));