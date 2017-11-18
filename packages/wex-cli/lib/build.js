module.exports = function (cmdArgs) {
  if (cmdArgs.watch) {
    console.log('watch');
  } else {
    console.log('build');
  }
}
