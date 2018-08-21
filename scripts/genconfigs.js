const load = require('@commitlint/load');
const util = require('util');

console.log('/* eslint-disable */');

function loadConfig(name, exportName) {
  load({extends: ['@commitlint/' + name]})
    .then(opts => {
      output(exportName, opts);
    });
}

function output(name, val) {
  console.log(`exports.${name} = ` + util.inspect(val, false, null) + ';');
}


loadConfig('config-angular-type-enum', 'AngularTypeEnum' );
loadConfig('config-angular', 'Angular');
loadConfig('config-conventional', 'Conventional');
loadConfig('config-lerna-scopes', 'LernaScopes');
loadConfig('config-patternplate', 'Patternplate');
