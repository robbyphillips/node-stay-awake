var stayAwake = require('../build/Release/stay_awake');
var process = require('process');

var noop = function() {};

module.exports = {};

module.exports.prevent = function(cb) {
    var callback = cb || noop;
    var code = stayAwake.start();
    if(code == 0) {
        return process.nextTick(function() {
            callback(new Error('Could not enter sleep'), null);
        });
    }
    process.nextTick(function() {
        callback(null, null);
    });
};

module.exports.allow = function(cb) {
    var callback = cb || noop;
    var code = stayAwake.stop();
    if(code == 0) {
        return process.nextTick(function() {
            callback(new Error('Could not allow sleep'), null);
        });
    }
    process.nextTick(function() {
        callback(null, null);
    });
};