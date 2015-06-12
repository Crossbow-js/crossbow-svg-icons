var cli = require("./index");
var del    = require('rimraf').sync;
var assert = require('assert');
var exists = require('fs').existsSync;
var read   = require('fs').readFileSync;
var prom   = require('prom-seq');

del('test/fixtures/dist');

var task = prom.create(cli.tasks);

task('', require('crossbow-ctx')()).then(function () {
    assert(exists('test/fixtures/dist/icons.svg'));
    assert(exists('test/fixtures/dist/preview.html'));
    assert(exists('test/fixtures/dist/svg4everybody.min.js'));
    console.log('Build complete');
}).done();