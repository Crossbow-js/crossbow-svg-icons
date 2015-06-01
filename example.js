var cli = require("./index");
var ctx = require("crossbow-ctx");

cli('', ctx({ paths: {svgIcons: {input: 'test/fixtures/*.svg', output: 'test/fixtures/dist'}}})).then(function () {
    console.log("DONE");
}).done();