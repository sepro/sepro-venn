System.register(['./index-fb40529c.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var seproVennCss = "";
            var SeproVenn = /** @class */ (function () {
                function SeproVenn(hostRef) {
                    registerInstance(this, hostRef);
                    this.scale = 1;
                    this.innerLabels = [];
                    this.innerValues = [];
                }
                SeproVenn.prototype.componentWillLoad = function () {
                    this.innerLabels = JSON.parse(this.labels);
                    this.innerValues = JSON.parse(this.values);
                };
                SeproVenn.prototype.labelsDidChangeHandler = function (newValue) {
                    this.innerLabels = JSON.parse(newValue);
                };
                SeproVenn.prototype.render = function () {
                    if (this.innerLabels.length == 2) {
                        return h("sepro-venn-2", { labels: this.labels, values: this.values, scale: this.scale });
                    }
                    else if (this.innerLabels.length == 3) {
                        return h("sepro-venn-3", { labels: this.labels, values: this.values, scale: this.scale });
                    }
                    else if (this.innerLabels.length == 4) {
                        return h("sepro-venn-4", { labels: this.labels, values: this.values, scale: this.scale });
                    }
                    else {
                        return h("div", null, h("p", null, "ERROR: Unsupported number of categories"));
                    }
                };
                Object.defineProperty(SeproVenn, "watchers", {
                    get: function () {
                        return {
                            "labels": ["labelsDidChangeHandler"]
                        };
                    },
                    enumerable: false,
                    configurable: true
                });
                return SeproVenn;
            }());
            exports('sepro_venn', SeproVenn);
            SeproVenn.style = seproVennCss;
        }
    };
});
