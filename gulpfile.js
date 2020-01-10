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

//Image optimization
const imagemin = require('imagemin');

// JS related 
const uglify = require('gulp-uglify');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const rollAsync = require('rollup-plugin-async');

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
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('/'))
		.pipe(dest('./dist/css'))
	done();
};

function js() {
  return rollup.rollup({
    input: './src/assets/js/main.js',
    plugins: [
      resolve(),
      rollAsync(),
      babel({
        babelrc: false,
        presets: [['@babel/preset-env', { modules: false }]],
        plugins: ['@babel/plugin-syntax-dynamic-import']
      })
    ],
    onwarn: function (warning, warn) {
      if (warning.code === 'THIS_IS_UNDEFINED') return;
      warn(warning);
    }
  }).then(bundle => {
    return bundle.write({
      dir: './dist/js',
      format: 'iife',
      compact: true,
      sourcemap: true,
      experimentalCodeSplitting: true
    });
  }).then(() => {
    return src('./dist/js/main.js')
      .pipe(uglify({
        compress: { drop_console: false },
        sourceMap: {
          filename: "main.js",
          url: "main.js.map"
        }
			}))
      .pipe(dest('./dist/js'));
  });
}

function fonts() {
  return src('./src/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(dest('./dist/fonts'));
};


function images(done) {
	src('./src/assets/images/**/*.*')
		.pipe(imagemin([
			imagemin.gifsicle({
				interlaced: true
			}),
			imagemin.jpegtran({
				progressive: true
			}),
			imagemin.optipng({
				optimizationLevel: 5
			}),
			imagemin.svgo({
				plugins: [{
					removeViewBox: false,
					collapseGroups: true
				}]
			})
		]))
		.pipe(dest('./dist/images'))
	done();
}

function watchFiles() {
	watch('./src/assets/scss/**/*.scss', css);
	watch('./src/assets/js/**/*.js', js);
	watch('./src/assets/images/**/*.*', images);
	watch('./src/assets/fonts/**/*.*', fonts);
	console.log(chalk.bgGreen.black.bold('Watching files for changes...'));
}
task("watch", watchFiles);
task("default", parallel(
	css,
	js,
	images
));