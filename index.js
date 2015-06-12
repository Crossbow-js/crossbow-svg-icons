var symbols = require('easy-svg').stream;

/**
 * Define the tasks that make up a build
 * @type {Object}
 */
var tasks = [makeSymbols];
var ns    = ['svg-icons'];

/**
 * @param deferred
 * @param previous
 * @param ctx
 */
function makeSymbols(deferred, previous, ctx) {

    ctx.vfs.src(ctx.path.make(ns.concat('input')))
        .pipe(symbols())
        .on('error', deferred.reject)
        .pipe(ctx.vfs.dest(ctx.path.make(ns.concat('output'))))
        .on('end', deferred.resolve);
}

module.exports.tasks = tasks;

