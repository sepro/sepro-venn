import { r as registerInstance, h } from './index-a73d3637.js';

const seproVennCss = ".grow{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:0.85}.grow:hover{opacity:1}text{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.text_value_2{font-size:3px}.text_label_2{font-size:3px}.text_value_3{font-size:12px}.text_label_3{font-size:12px}.text_value_4{font-size:12px}.text_label_4{font-size:12px}";

class SeproVenn2 {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scale = 1;
        this.innerLabels = [];
        this.innerValues = [];
    }
    transform() {
        return ("matrix(" + this.scale * 4 + " 0 0 " + this.scale * 4 + " 0 0)");
    }
    width() {
        return (296 * this.scale);
    }
    height() {
        return (116 * this.scale);
    }
    componentWillLoad() {
        this.innerLabels = JSON.parse(this.labels);
        this.innerValues = JSON.parse(this.values);
    }
    labelsDidChangeHandler(newValue) {
        this.innerLabels = JSON.parse(newValue);
    }
    valuesDidChangeHandler(newValue) {
        this.innerValues = JSON.parse(newValue);
    }
    render() {
        return h("svg", { id: "venn-svg", width: this.width(), height: this.height(), version: "1.1", xmlns: "http://www.w3.org/2000/svg" }, h("g", { transform: this.transform() }, h("g", { stroke: "#fff", "stroke-width": "0.5" }, h("path", { class: "grow", d: "m34.019 5.1642a17.236 13.106 0 0 0-6.2043 10.054 17.236 13.106 0 0 0 6.1842 10.055 17.236 13.106 0 0 0 6.2038-10.055 17.236 13.106 0 0 0-6.1837-10.054z", fill: "#87de87" }), h("path", { class: "grow", d: "m22.385 1.4226a18.143 13.796 0 0 0-18.143 13.796 18.143 13.796 0 0 0 18.143 13.796 18.143 13.796 0 0 0 11.612-3.2127 18.143 13.796 0 0 1-6.5097-10.583 18.143 13.796 0 0 1 6.5309-10.584 18.143 13.796 0 0 0-11.633-3.2122z", fill: "#fd5" }), h("path", { class: "grow", d: "m34.019 4.6348a18.143 13.796 0 0 1 6.5097 10.584 18.143 13.796 0 0 1-6.5309 10.583 18.143 13.796 0 0 0 11.633 3.2127 18.143 13.796 0 0 0 18.143-13.796 18.143 13.796 0 0 0-18.143-13.796 18.143 13.796 0 0 0-11.612 3.2122z", fill: "#80b3ff" })), h("text", { class: "text_value_2", x: "19.130795", y: "16.756538" }, h("tspan", { "text-align": "center", "text-anchor": "middle" }, this.innerValues[0])), h("text", { class: "text_value_2", x: "34.008442", y: "16.756538" }, h("tspan", { "text-align": "center", "text-anchor": "middle" }, this.innerValues[2])), h("text", { class: "text_value_2", x: "48.885826", y: "16.756538" }, h("tspan", { "text-align": "center", "text-anchor": "middle" }, this.innerValues[1])), h("text", { class: "text_label_2", x: "4.6216135", y: "3.0707977" }, h("tspan", { "text-align": "left", "text-anchor": "middle" }, this.innerLabels[0])), h("text", { class: "text_label_2", x: "63.257492", y: "3.0707977" }, h("tspan", { "text-align": "right", "text-anchor": "middle" }, this.innerLabels[1]))));
    }
    static get watchers() { return {
        "labels": ["labelsDidChangeHandler"],
        "values": ["valuesDidChangeHandler"]
    }; }
}
SeproVenn2.style = seproVennCss;

export { SeproVenn2 as sepro_venn_2 };
