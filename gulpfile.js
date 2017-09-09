var gulp = require('gulp')
var connect = require('gulp-connect')


	gulp.task('default', function () {
		connect.server({
			root: 'public',
			port: 8875,
			livereload: true,
			fallback: 'public/index.html'
		});

		gulp.task('html', function () {
			gulp.src('./app/*.html')
				.pipe(connect.reload());
		});

		gulp.task('watch', function () {
			gulp.watch(['./app/*.html'], ['html']);
		});
	});

  