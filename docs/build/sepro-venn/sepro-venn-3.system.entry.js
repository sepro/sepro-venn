System.register(['./index-fb40529c.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var seproVennCss = ".grow{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:0.85}.grow:hover{opacity:1}text{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.text_value_2{font-size:3px}.text_label_2{font-size:3px}.text_value_3{font-size:12px}.text_label_3{font-size:12px}.text_value_4{font-size:12px}.text_label_4{font-size:12px}";
            var SeproVenn3 = /** @class */ (function () {
                function SeproVenn3(hostRef) {
                    registerInstance(this, hostRef);
                    this.scale = 1;
                    this.innerLabels = [];
                    this.innerValues = [];
                }
                SeproVenn3.prototype.componentWillLoad = function () {
                    this.innerLabels = JSON.parse(this.labels);
                    this.innerValues = JSON.parse(this.values);
                };
                SeproVenn3.prototype.transform = function () {
                    return ("matrix(" + this.scale + " 0 0 " + this.scale + " 0 0)");
                };
                SeproVenn3.prototype.width = function () {
                    return (296 * this.scale);
                };
                SeproVenn3.prototype.height = function () {
                    return (260 * this.scale);
                };
                SeproVenn3.prototype.labelsDidChangeHandler = function (newValue) {
                    this.innerLabels = JSON.parse(newValue);
                };
                SeproVenn3.prototype.valuesDidChangeHandler = function (newValue) {
                    this.innerValues = JSON.parse(newValue);
                };
                SeproVenn3.prototype.render = function () {
                    return h("svg", { id: "venn-svg", version: "1.1", width: this.width(), height: this.height(), xmlns: "http://www.w3.org/2000/svg" }, h("g", { transform: this.transform() }, h("g", { stroke: "#fff", "stroke-width": "3" }, h("path", { class: "grow", d: "m169.17 90.933a73.506 73.506 0 0 1-34.5 59.902 73.506 73.506 0 0 0 38.793 11.176 73.506 73.506 0 0 0 34.58-8.707 73.506 73.506 0 0 0-38.873-62.371z", fill: "#aa87de" }), h("path", { class: "grow", d: "m134.67 150.84a73.506 73.506 0 0 1-34.625-59.859 73.506 73.506 0 0 0-38.807 62.371 73.506 73.506 0 0 0 0 2e-3 73.506 73.506 0 0 0 2e-3 0 73.506 73.506 0 0 0 34.545 8.6621 73.506 73.506 0 0 0 38.885-11.176z", fill: "#f95" }), h("path", { class: "grow", d: "m134.58 26.175a73.506 73.506 0 0 0-34.621 62.33 73.506 73.506 0 0 0 0.0879 2.4707 73.506 73.506 0 0 1 34.58-8.7051 73.506 73.506 0 0 1 34.545 8.6621 73.506 73.506 0 0 0 0.12109-2.4277 73.506 73.506 0 0 0-34.713-62.33z", fill: "#87de87" }), h("path", { class: "grow", d: "m95.789 14.999a73.506 73.506 0 0 0-73.506 73.506 73.506 73.506 0 0 0 38.961 64.844 73.506 73.506 0 0 1 38.805-62.371 73.506 73.506 0 0 1-0.087904-2.4727 73.506 73.506 0 0 1 34.623-62.33 73.506 73.506 0 0 0-38.795-11.176z", fill: "#fd5" }), h("path", { class: "grow", d: "m134.58 26.175a73.506 73.506 0 0 1 34.711 62.33 73.506 73.506 0 0 1-0.12109 2.4277 73.506 73.506 0 0 1 38.873 62.373 73.506 73.506 0 0 0 38.928-64.801 73.506 73.506 0 0 0-73.508-73.506 73.506 73.506 0 0 0-38.883 11.176z", fill: "#80b3ff" }), h("path", { class: "grow", d: "m208.05 153.31a73.506 73.506 0 0 1-34.58 8.7051 73.506 73.506 0 0 1-38.793-11.176 73.506 73.506 0 0 1-38.885 11.176 73.506 73.506 0 0 1-34.545-8.6621 73.506 73.506 0 0 0-0.12109 2.4277 73.506 73.506 0 0 0 73.506 73.506 73.506 73.506 0 0 0 73.506-73.506 73.506 73.506 0 0 0-0.0879-2.4707z", fill: "#f55" }), h("path", { class: "grow", d: "m134.67 150.84a73.506 73.506 0 0 0 34.5-59.902 73.506 73.506 0 0 0-34.545-8.6621 73.506 73.506 0 0 0-34.58 8.707 73.506 73.506 0 0 0 34.625 59.857z", fill: "#87decd" })), h("g", null, h("text", { class: "text_value_3", x: "72.733826", y: "71.964066" }, h("tspan", { "text-align": "center", "text-anchor": "middle" }, this.innerValues[0])), h("text", { class: "text_value_3", x: "134.6283", y: "71.964066" }, h("tspan", { "text-align": "center", "text-anchor": "middle" }, this.innerValues[3])), h("text", { class: "text_value_3", x: "196.47906", y: "71.964066" }, h("tspan", { "text-align": "center", "text-anchor": "middle" }, this.innerValues[1])), h("text", { class: "text_label_3", x: "15.367762", y: "10.207531" }, h("tspan", { "text-align": "center", "text-anchor": "middle" }, this.innerLabels[0])), h("text", { class: "text_label_3", x: "249.91129", y: "10.207531" }, h("tspan", { "text-align": "end", "text-anchor": "end" }, this.innerLabels[1])), h("text", { class: "text_label_3", x: "134.35367", y: "243.97731" }, h("tspan", { "text-align": "center", "text-anchor": "middle" }, this.innerLabels[2])), h("text", { class: "text_value_3", x: "134.62927", y: "200.15001" }, h("tspan", { "text-align": "center", "text-anchor": "middle" }, this.innerValues[2])), h("text", { class: "text_value_3", x: "134.61136", y: "118.76494" }, h("tspan", { "text-align": "center", "text-anchor": "middle" }, this.innerValues[6])), h("text", { class: "text_value_3", x: "171.06842", y: "142.40825" }, h("tspan", { "text-align": "center", "text-anchor": "middle" }, this.innerValues[4])), h("text", { class: "text_value_3", x: "98.203461", y: "142.40825" }, h("tspan", { "text-align": "center", "text-anchor": "middle" }, this.innerValues[5])))));
                };
                Object.defineProperty(SeproVenn3, "watchers", {
                    get: function () {
                        return {
                            "labels": ["labelsDidChangeHandler"],
                            "values": ["valuesDidChangeHandler"]
                        };
                    },
                    enumerable: false,
                    configurable: true
                });
                return SeproVenn3;
            }());
            exports('sepro_venn_3', SeproVenn3);
            SeproVenn3.style = seproVennCss;
        }
    };
});
