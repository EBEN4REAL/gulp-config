const gulp = require('gulp');

gulp.task('processHTML' , () => {
	gulp.src('*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('processJS' , () => {
	gulp.src('*.js')
		.pipe(gulp.dest('dist'));
})