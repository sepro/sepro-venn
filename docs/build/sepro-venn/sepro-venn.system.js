System.register(['./index-fb40529c.system.js', './app-globals-497eb362.system.js'], function () {
    'use strict';
    var patchBrowser, bootstrapLazy, globalScripts;
    return {
        setters: [function (module) {
                patchBrowser = module.p;
                bootstrapLazy = module.b;
            }, function (module) {
                globalScripts = module.g;
            }],
        execute: function () {
            patchBrowser().then(function (options) {
                globalScripts();
                return bootstrapLazy([["sepro-venn-2.system", [[1, "sepro-venn-2", { "labels": [1], "values": [1], "scale": [2] }]]], ["sepro-venn-3.system", [[1, "sepro-venn-3", { "labels": [1], "values": [1], "scale": [2] }]]], ["sepro-venn-4.system", [[1, "sepro-venn-4", { "labels": [1], "values": [1], "scale": [2] }]]], ["sepro-venn.system", [[1, "sepro-venn", { "labels": [1], "values": [1], "scale": [2] }]]]], options);
            });
        }
    };
});
