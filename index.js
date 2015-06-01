var symbols = require('easy-svg');
var prom = require('prom-seq');

/**
 * Define the tasks that make up a build
 * @type {Object}
 */
var tasks = [makeSymbols];
var builder = prom.create(tasks);

/**
 * @param deferred
 * @param previous
 * @param ctx
 */
function makeSymbols(deferred, previous, ctx) {

    ctx.vfs.src(ctx.paths.svgIcons.input)
        .pipe(symbols.stream())
        .on('error', deferred.reject)
        .pipe(ctx.vfs.dest(ctx.paths.svgIcons.output))
        .on('end', deferred.resolve);
}

if (!module.parent) {
    builder('', require('crossbow-ctx')())
        .progress(function (obj) {
            console.log(obj.msg);
        })
        .catch(function (err) {
            console.log(err.stack);
        });
}

module.exports = builder;
module.exports.tasks = tasks;

