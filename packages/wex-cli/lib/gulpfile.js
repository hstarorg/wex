const gulp = require('gulp4');
const shelljs = require('shelljs');
const util = require('../util');
const fse = require('fs-extra');
const path = require('path');
const rename = require('gulp-rename');

gulp.task('clean-dist', done => {
  util.log('清理dist目录');
  shelljs.rm('-rf', 'dist');
  done();
});

gulp.task('copy-wex-lib', () => {
  util.log('复制wex-core到dist目录');
  return gulp.src('./node_modules/wex-core/li[b]/**')
    .pipe(gulp.dest('./dist'));
});

gulp.task('compile-src', done => {
  util.log('编译src目录代码');
  util.exec('tsc', false);
  done();
});

gulp.task('copy-html', () => {
  return gulp.src('src/page[s]/**/*.html')
    .pipe(rename({ extname: '.wxml' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-css', () => {
  return gulp.src('src/page[s]/**/*.css')
    .pipe(rename({ extname: '.wcss' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('generate:app.json', done => {
  const appConfig = {};
  const pages = fse.readdirSync('./dist/pages').map(name => {
    return `pages/${name}/${name}`;
  });
  appConfig.pages = pages;
  util.writeFile('dist/app.json', appConfig);
  done();
});

gulp.task('build', gulp.series(
  'clean-dist',
  'copy-wex-lib',
  'compile-src',
  gulp.parallel('generate:app.json', 'copy-html', 'copy-css')
));

gulp.task('watch', done => {
  gulp.watch('src/**/*', gulp.series('compile-src'));
  done();
});

gulp.task('build:watch', gulp.parallel('build', 'watch'));
