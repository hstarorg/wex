const path = require('path');
const fs = require('fs');
const shelljs = require('shelljs');

module.exports = {
  root(...args) {
    return path.join(__dirname, ...args);
  },
  log(msg) {
    console.log(msg);
  },
  exec(cmd, allowColor = true) {
    shelljs.exec(`${cmd} ${allowColor ? '--color=always' : ''}`);
  },
  writeFile(filename, content) {
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    fs.writeFileSync(filename, content, 'utf8');
  }
};
