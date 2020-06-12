import { r as registerInstance, h } from './index-a73d3637.js';

const seproVennCss = "";

class SeproVenn {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scale = 1;
        this.innerLabels = [];
        this.innerValues = [];
    }
    componentWillLoad() {
        this.innerLabels = JSON.parse(this.labels);
        this.innerValues = JSON.parse(this.values);
    }
    labelsDidChangeHandler(newValue) {
        this.innerLabels = JSON.parse(newValue);
    }
    render() {
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
    }
    static get watchers() { return {
        "labels": ["labelsDidChangeHandler"]
    }; }
}
SeproVenn.style = seproVennCss;

export { SeproVenn as sepro_venn };
