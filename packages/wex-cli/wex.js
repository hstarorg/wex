#!/usr/bin/env node

const program = require('commander');
const packageJson = require('./package.json');
const version = `wex: ${packageJson.version}`;

program
  .version(version)
  .usage('Wex cli tools.');

program
  .command('build')
  .option('-w, --watch', '监听文件改动，自动编译')
  .description('编译项目')
  .action(cmdArgs => {
    require('./lib/build')(cmdArgs);
  });


// 解析命令
program.parse(process.argv);

//如果直接使用nc，那么显示help
if (process.argv.length === 2) {
  program.outputHelp();
}
