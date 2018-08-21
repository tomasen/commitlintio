const load = require('@commitlint/load');
const util = require('util');

console.log('/* eslint-disable */');

function loadConfig(name, exportName) {
  return new Promise((resolve) => {
    load({extends: ['@commitlint/' + name]})
      .then(opts => {
        output(exportName, opts);
        resolve();
      });
  });
}

function output(name, val) {
  console.log(`exports.${name} = ` + util.inspect(val, false, null) + ';');
}

async function f() {
  await loadConfig('config-angular-type-enum', 'AngularTypeEnum' );
  await loadConfig('config-angular', 'Angular');
  await loadConfig('config-conventional', 'Conventional');
  await loadConfig('config-lerna-scopes', 'LernaScopes');
  await loadConfig('config-patternplate', 'Patternplate');
}

f();
