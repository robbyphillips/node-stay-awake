var child_process = require('child_process');
var process = require('process');

var noop = function() {};

var caffein = null;

module.exports = {};

module.exports.prevent = function(cb) {
    var callback = cb || noop;
    if(caffein) {
        return process.nextTick(function() {
            callback(null, null);
        });
    }

    caffein = child_process.spawn('caffeinate')
    caffein.on('error', function(err) {
        callback(err, null);
        callback = noop;
        caffein = null;
    });

    caffein.on('exit', function() {
        caffein = null;
        console.log('Caffien ended');
    });

    if(caffein.pid) {
        process.nextTick(function() {
            callback(null, null);
        });
    }
};

module.exports.allow = function(cb) {
    var callback = cb || noop;
    if(caffein) {
        caffein.kill();
        caffein = null;
    }
    process.nextTick(function() {
        callback(null, null);
    });
};