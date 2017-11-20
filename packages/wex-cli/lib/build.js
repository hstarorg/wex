const shelljs = require('shelljs');
const util = require('../util');

const gulpfilePath = util.root('lib/gulpfile.js');
const cwd = process.cwd();

function execGulpCmd(cmd) {
  shelljs.exec(`${util.command('gulp4')} ${cmd} --gulpfile ${gulpfilePath} --cwd ${cwd} --color=always`);
}

module.exports = function (cmdArgs) {
  if (cmdArgs.watch) {
    execGulpCmd('build:watch');
  } else {
    execGulpCmd('build');
  }
}
