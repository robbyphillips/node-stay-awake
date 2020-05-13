var proc = require('process');

var platform = proc.platform;

if (/^win/.test(platform)) {
    module.exports = require('./lib/windows');
} else if (/^darwin/.test(platform)) {
    module.exports = require('./lib/mac');
} else {
    console.warn('Platform ' + platform + ' is not supported.');
}
