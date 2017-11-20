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
  util.exec('npm run dev', false);
  done();
});

gulp.task('process-js', done => {
  const filename = 'dist/app.js';
  const configJs = 'new exports.default().$$getOptions()';
  let appContent = util.readFile(filename);
  // 替换lib地址
  appContent = appContent.replace('"wex-core"', '"lib/wex-core"');
  // 追加启动入口
  appContent += `\nApp(${configJs})`;
  util.writeFile('dist/app.js', appContent);

  fse.readdirSync('dist/pages').forEach(name => {
    let p = `dist/pages/${name}/${name}.js`;
    let content = util.readFile(p);
    content = content.replace('"wex-core"', '"../../lib/wex-core"');
    content += `\nPage(${configJs})`;
    util.writeFile(p, content);
  });
  done();
});

gulp.task('copy-html', () => {
  return gulp.src('src/page[s]/**/*.html')
    .pipe(rename({
      extname: '.wxml'
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-css', () => {
  return gulp.src('src/page[s]/**/*.css')
    .pipe(rename({
      extname: '.wcss'
    }))
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

gulp.task('build:wex', gulp.series(
  'compile-src',
  gulp.parallel('generate:app.json', 'copy-html', 'copy-css', 'process-js')
));

gulp.task('build', gulp.series('clean-dist', 'copy-wex-lib', 'build:wex'));

gulp.task('watch', done => {
  gulp.watch('src/**/*', gulp.series('build:wex'));
  done();
});

gulp.task('build:watch', gulp.parallel('build', 'watch'));
