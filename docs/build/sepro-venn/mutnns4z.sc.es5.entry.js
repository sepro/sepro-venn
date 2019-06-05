/*! Built with http://stenciljs.com */
SeproVenn.loadBundle("mutnns4z",["exports"],function(e){var t=window.SeproVenn.h,n=function(){function e(){this.scale=1,this.innerLabels=[],this.innerValues=[]}return e.prototype.componentWillLoad=function(){this.innerLabels=JSON.parse(this.labels),this.innerValues=JSON.parse(this.values)},e.prototype.labelsDidChangeHandler=function(e){this.innerLabels=JSON.parse(e)},e.prototype.render=function(){return 2==this.innerLabels.length?t("sepro-venn-2",{labels:this.labels,values:this.values,scale:this.scale}):3==this.innerLabels.length?t("sepro-venn-3",{labels:this.labels,values:this.values,scale:this.scale}):4==this.innerLabels.length?t("sepro-venn-4",{labels:this.labels,values:this.values,scale:this.scale}):t("div",null,t("p",null,"ERROR: Unsupported number of categories"))},Object.defineProperty(e,"is",{get:function(){return"sepro-venn"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{labels:{type:String,attr:"labels",watchCallbacks:["labelsDidChangeHandler"]},scale:{type:Number,attr:"scale"},values:{type:String,attr:"values"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){this.scale=1,this.innerLabels=[],this.innerValues=[]}return e.prototype.transform=function(){return"matrix("+4*this.scale+" 0 0 "+4*this.scale+" 0 0)"},e.prototype.width=function(){return 296*this.scale},e.prototype.height=function(){return 116*this.scale},e.prototype.componentWillLoad=function(){this.innerLabels=JSON.parse(this.labels),this.innerValues=JSON.parse(this.values)},e.prototype.labelsDidChangeHandler=function(e){this.innerLabels=JSON.parse(e)},e.prototype.valuesDidChangeHandler=function(e){this.innerValues=JSON.parse(e)},e.prototype.render=function(){return t("svg",{id:"venn-svg",width:this.width(),height:this.height(),version:"1.1",xmlns:"http://www.w3.org/2000/svg"},t("g",{transform:this.transform()},t("g",{stroke:"#fff","stroke-width":"0.5"},t("path",{class:"grow",d:"m34.019 5.1642a17.236 13.106 0 0 0-6.2043 10.054 17.236 13.106 0 0 0 6.1842 10.055 17.236 13.106 0 0 0 6.2038-10.055 17.236 13.106 0 0 0-6.1837-10.054z",fill:"#87de87"}),t("path",{class:"grow",d:"m22.385 1.4226a18.143 13.796 0 0 0-18.143 13.796 18.143 13.796 0 0 0 18.143 13.796 18.143 13.796 0 0 0 11.612-3.2127 18.143 13.796 0 0 1-6.5097-10.583 18.143 13.796 0 0 1 6.5309-10.584 18.143 13.796 0 0 0-11.633-3.2122z",fill:"#fd5"}),t("path",{class:"grow",d:"m34.019 4.6348a18.143 13.796 0 0 1 6.5097 10.584 18.143 13.796 0 0 1-6.5309 10.583 18.143 13.796 0 0 0 11.633 3.2127 18.143 13.796 0 0 0 18.143-13.796 18.143 13.796 0 0 0-18.143-13.796 18.143 13.796 0 0 0-11.612 3.2122z",fill:"#80b3ff"})),t("g",{fill:"#000000","font-family":"sans-serif","font-size":"10.583px","letter-spacing":"0px","stroke-width":"0","word-spacing":"0px"},t("text",{x:"19.130795",y:"16.756538",style:"line-height:1.25"},t("tspan",{x:"19.130795",y:"16.756538","font-size":"4.2333px","stroke-width":".26458","text-align":"center","text-anchor":"middle"},this.innerValues[0])),t("text",{x:"34.008442",y:"16.756538",style:"line-height:1.25"},t("tspan",{x:"34.008442",y:"16.756538","font-size":"4.2333px","stroke-width":".26458","text-align":"center","text-anchor":"middle"},this.innerValues[2])),t("text",{x:"48.885826",y:"16.756538",style:"line-height:1.25"},t("tspan",{x:"48.885826",y:"16.756538","font-size":"4.2333px","stroke-width":".26458","text-align":"center","text-anchor":"middle"},this.innerValues[1])),t("text",{x:"4.6216135",y:"3.0707977",style:"line-height:1.25"},t("tspan",{x:"4.6216135",y:"3.0707977","font-size":"2.8222px","stroke-width":".26458"},this.innerLabels[0])),t("text",{x:"63.257492",y:"3.0707977",style:"line-height:1.25"},t("tspan",{x:"63.257492",y:"3.0707977","font-size":"2.8222px","stroke-width":".26458","text-align":"end","text-anchor":"end"},this.innerLabels[1])))))},Object.defineProperty(e,"is",{get:function(){return"sepro-venn-2"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{labels:{type:String,attr:"labels",watchCallbacks:["labelsDidChangeHandler"]},scale:{type:Number,attr:"scale"},values:{type:String,attr:"values",watchCallbacks:["valuesDidChangeHandler"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".grow.sc-sepro-venn-2{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:.85}.grow.sc-sepro-venn-2:hover{opacity:1}text.sc-sepro-venn-2{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}"},enumerable:!0,configurable:!0}),e}(),s=function(){function e(){this.scale=1,this.innerLabels=[],this.innerValues=[]}return e.prototype.componentWillLoad=function(){this.innerLabels=JSON.parse(this.labels),this.innerValues=JSON.parse(this.values)},e.prototype.transform=function(){return"matrix("+this.scale+" 0 0 "+this.scale+" 0 0)"},e.prototype.width=function(){return 296*this.scale},e.prototype.height=function(){return 260*this.scale},e.prototype.labelsDidChangeHandler=function(e){this.innerLabels=JSON.parse(e)},e.prototype.valuesDidChangeHandler=function(e){this.innerValues=JSON.parse(e)},e.prototype.render=function(){return t("svg",{id:"venn-svg",version:"1.1",width:this.width(),height:this.height(),xmlns:"http://www.w3.org/2000/svg"},t("g",{transform:this.transform()},t("g",{stroke:"#fff","stroke-width":"3"},t("path",{class:"grow",d:"m169.17 90.933a73.506 73.506 0 0 1-34.5 59.902 73.506 73.506 0 0 0 38.793 11.176 73.506 73.506 0 0 0 34.58-8.707 73.506 73.506 0 0 0-38.873-62.371z",fill:"#aa87de"}),t("path",{class:"grow",d:"m134.67 150.84a73.506 73.506 0 0 1-34.625-59.859 73.506 73.506 0 0 0-38.807 62.371 73.506 73.506 0 0 0 0 2e-3 73.506 73.506 0 0 0 2e-3 0 73.506 73.506 0 0 0 34.545 8.6621 73.506 73.506 0 0 0 38.885-11.176z",fill:"#f95"}),t("path",{class:"grow",d:"m134.58 26.175a73.506 73.506 0 0 0-34.621 62.33 73.506 73.506 0 0 0 0.0879 2.4707 73.506 73.506 0 0 1 34.58-8.7051 73.506 73.506 0 0 1 34.545 8.6621 73.506 73.506 0 0 0 0.12109-2.4277 73.506 73.506 0 0 0-34.713-62.33z",fill:"#87de87"}),t("path",{class:"grow",d:"m95.789 14.999a73.506 73.506 0 0 0-73.506 73.506 73.506 73.506 0 0 0 38.961 64.844 73.506 73.506 0 0 1 38.805-62.371 73.506 73.506 0 0 1-0.087904-2.4727 73.506 73.506 0 0 1 34.623-62.33 73.506 73.506 0 0 0-38.795-11.176z",fill:"#fd5"}),t("path",{class:"grow",d:"m134.58 26.175a73.506 73.506 0 0 1 34.711 62.33 73.506 73.506 0 0 1-0.12109 2.4277 73.506 73.506 0 0 1 38.873 62.373 73.506 73.506 0 0 0 38.928-64.801 73.506 73.506 0 0 0-73.508-73.506 73.506 73.506 0 0 0-38.883 11.176z",fill:"#80b3ff"}),t("path",{class:"grow",d:"m208.05 153.31a73.506 73.506 0 0 1-34.58 8.7051 73.506 73.506 0 0 1-38.793-11.176 73.506 73.506 0 0 1-38.885 11.176 73.506 73.506 0 0 1-34.545-8.6621 73.506 73.506 0 0 0-0.12109 2.4277 73.506 73.506 0 0 0 73.506 73.506 73.506 73.506 0 0 0 73.506-73.506 73.506 73.506 0 0 0-0.0879-2.4707z",fill:"#f55"}),t("path",{class:"grow",d:"m134.67 150.84a73.506 73.506 0 0 0 34.5-59.902 73.506 73.506 0 0 0-34.545-8.6621 73.506 73.506 0 0 0-34.58 8.707 73.506 73.506 0 0 0 34.625 59.857z",fill:"#87decd"})),t("g",{fill:"#000000","font-family":"sans-serif","font-size":"48px","letter-spacing":"0px","stroke-width":"1.0583","word-spacing":"0px"},t("text",{x:"72.733826",y:"71.964066",style:"line-height:1.25"},t("tspan",{x:"72.733826",y:"71.964066","font-size":"16.933px","stroke-width":"1.0583","text-align":"center","text-anchor":"middle"},this.innerValues[0])),t("text",{x:"134.6283",y:"71.964066",style:"line-height:1.25"},t("tspan",{x:"134.6283",y:"71.964066","font-size":"16.933px","stroke-width":"1.0583","text-align":"center","text-anchor":"middle"},this.innerValues[3])),t("text",{x:"196.47906",y:"71.964066",style:"line-height:1.25"},t("tspan",{x:"196.47906",y:"71.964066","font-size":"16.933px","stroke-width":"1.0583","text-align":"center","text-anchor":"middle"},this.innerValues[1])),t("text",{x:"15.367762",y:"8.207531",style:"line-height:1.25"},t("tspan",{x:"15.367762",y:"8.207531","font-size":"11.289px","stroke-width":"1.0583"},this.innerLabels[0])),t("text",{x:"249.91129",y:"8.207531",style:"line-height:1.25"},t("tspan",{x:"249.91129",y:"8.207531","font-size":"11.289px","stroke-width":"1.0583","text-align":"end","text-anchor":"end"},this.innerLabels[1])),t("text",{x:"134.35367",y:"243.97731",style:"line-height:1.25"},t("tspan",{x:"134.35367",y:"243.97731","font-size":"11.289px","stroke-width":"1.0583","text-align":"center","text-anchor":"middle"},this.innerLabels[2])),t("text",{x:"134.62927",y:"200.15001",style:"line-height:1.25"},t("tspan",{x:"134.62927",y:"200.15001","font-size":"16.933px","stroke-width":"1.0583","text-align":"center","text-anchor":"middle"},this.innerValues[2])),t("text",{x:"134.61136",y:"118.76494",style:"line-height:1.25"},t("tspan",{x:"134.61136",y:"118.76494","font-size":"16.933px","stroke-width":"1.0583","text-align":"center","text-anchor":"middle"},this.innerValues[6])),t("text",{x:"171.06842",y:"142.40825",style:"line-height:1.25"},t("tspan",{x:"171.06842",y:"142.40825","font-size":"16.933px","stroke-width":"1.0583","text-align":"center","text-anchor":"middle"},this.innerValues[4])),t("text",{x:"98.203461",y:"142.40825",style:"line-height:1.25"},t("tspan",{x:"98.203461",y:"142.40825","font-size":"16.933px","stroke-width":"1.0583","text-align":"center","text-anchor":"middle"},this.innerValues[5])))))},Object.defineProperty(e,"is",{get:function(){return"sepro-venn-3"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{labels:{type:String,attr:"labels",watchCallbacks:["labelsDidChangeHandler"]},scale:{type:Number,attr:"scale"},values:{type:String,attr:"values",watchCallbacks:["valuesDidChangeHandler"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".grow.sc-sepro-venn-3{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:.85}.grow.sc-sepro-venn-3:hover{opacity:1}text.sc-sepro-venn-3{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}"},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){this.scale=1,this.innerLabels=[],this.innerValues=[]}return e.prototype.componentWillLoad=function(){this.innerLabels=JSON.parse(this.labels),this.innerValues=JSON.parse(this.values)},e.prototype.transform=function(){return"matrix("+this.scale+" 0 0 "+this.scale+" 0 0)"},e.prototype.width=function(){return 435*this.scale},e.prototype.height=function(){return 312*this.scale},e.prototype.labelsDidChangeHandler=function(e){this.innerLabels=JSON.parse(e)},e.prototype.valuesDidChangeHandler=function(e){this.innerValues=JSON.parse(e)},e.prototype.render=function(){return t("svg",{id:"venn-svg",version:"1.1",width:this.width(),height:this.height(),xmlns:"http://www.w3.org/2000/svg"},t("g",{transform:this.transform()},t("g",{transform:"translate(-1.3516 228.47)"},t("g",{"fill-opacity":".87843",stroke:"#fff","stroke-miterlimit":"10"},t("g",{"stroke-width":"4.1694"},t("path",{class:"grow",d:"m210.25 10.685a69.647 142.08 44.164 0 1-44.538 17.569 69.647 142.08 44.164 0 0 11.544 38.1 69.647 142.08 44.164 0 0 10.12 6.7008 142.08 69.647 45.836 0 0 54.414-7.5368 142.08 69.647 45.836 0 0 11.544-38.1 142.08 69.647 45.836 0 1-43.085-16.733z",fill:"#d4c37f"}),t("path",{class:"grow",d:"m77.257-149.25a142.08 69.647 45.836 0 0-6.1621 0.0713 142.08 69.647 45.836 0 0-27.269 10.851 142.08 69.647 45.836 0 0 49.028 150.45 142.08 69.647 45.836 0 0 94.526 60.93 69.647 142.08 44.164 0 1-10.112-6.6965 69.647 142.08 44.164 0 1-11.559-38.098 69.647 142.08 44.164 0 1-46.944-9.2626 69.647 142.08 44.164 0 1 4.098-88.703 142.08 69.647 45.836 0 1-32.11-77.917 142.08 69.647 45.836 0 0-13.496-1.6224z",fill:"#ffdd54"}),t("path",{class:"grow",d:"m122.9-69.528a69.647 142.08 44.164 0 0-4.1282 88.655 69.647 142.08 44.164 0 0 46.94 9.1269 69.647 142.08 44.164 0 1 10.872-40.375 142.08 69.647 45.836 0 1-25.22-22.983 142.08 69.647 45.836 0 1-28.464-34.424z",fill:"#ff9954"}),t("path",{class:"grow",d:"m341.79-150.09a69.647 142.08 44.164 0 1 6.1622 0.0713 69.647 142.08 44.164 0 1 27.269 10.851 69.647 142.08 44.164 0 1-49.028 150.45 69.647 142.08 44.164 0 1-94.526 60.93 142.08 69.647 45.836 0 0 10.112-6.6965 142.08 69.647 45.836 0 0 11.559-38.098 142.08 69.647 45.836 0 0 46.944-9.2626 142.08 69.647 45.836 0 0-4.0981-88.703 69.647 142.08 44.164 0 0 32.11-77.917 69.647 142.08 44.164 0 1 13.496-1.6224z",fill:"#8f8f8f"}),t("path",{class:"grow",d:"m296.14-70.364a142.08 69.647 45.836 0 1 4.1282 88.655 142.08 69.647 45.836 0 1-46.94 9.1269 142.08 69.647 45.836 0 0-10.872-40.375 69.647 142.08 44.164 0 0 25.22-22.983 69.647 142.08 44.164 0 0 28.464-34.424z",fill:"#a0b9df"}),t("path",{class:"grow",d:"m90.753-147.63a142.08 69.647 45.836 0 0 32.123 77.826 69.647 142.08 44.164 0 1 32.185-47.567 142.08 69.647 45.836 0 0-64.308-30.259z",fill:"#87de87"}),t("path",{class:"grow",d:"m328.29-148.46a69.647 142.08 44.164 0 1-32.123 77.826 142.08 69.647 45.836 0 0-32.185-47.567 69.647 142.08 44.164 0 1 64.308-30.259z",fill:"#d47f7f"}),t("path",{class:"grow",d:"m209.88-65.572a69.647 142.08 44.164 0 0-33.256 53.275 142.08 69.647 45.836 0 0 33.627 22.983 69.647 142.08 44.164 0 0 32.799-22.552 142.08 69.647 45.836 0 0-33.17-53.705z",fill:"#9dc8c0"}),t("path",{class:"grow",d:"m209.32-167.19a68.32 139.37 44.164 0 0-41.569 35.011 68.32 139.37 44.164 0 0-12.432 13.814 139.37 68.32 45.836 0 1 36.938 31.824 139.37 68.32 45.836 0 1 16.769 19.001 68.32 139.37 44.164 0 1 16.114-18.181 68.32 139.37 44.164 0 1 37.801-32.462 139.37 68.32 45.836 0 0-13.294-14.816 139.37 68.32 45.836 0 0-40.327-34.191z",fill:"#aa87de","stroke-width":"4.09"}),t("path",{class:"grow",d:"m134.9-197.62a142.08 69.647 45.836 0 0-6.1621 0.0711 142.08 69.647 45.836 0 0-27.271 10.851 142.08 69.647 45.836 0 0-11.574 38.093 142.08 69.647 45.836 0 1 64.366 30.19 69.647 142.08 44.164 0 1 12.673-14.05 69.647 142.08 44.164 0 1 42.383-35.695 142.08 69.647 45.836 0 0-74.415-29.46z",fill:"#80b3ff"}),t("path",{class:"grow",d:"m283.34-197.41a69.647 142.08 44.164 0 1 6.1621 0.0711 69.647 142.08 44.164 0 1 27.271 10.851 69.647 142.08 44.164 0 1 11.574 38.093 69.647 142.08 44.164 0 0-64.366 30.19 142.08 69.647 45.836 0 0-12.673-14.05 142.08 69.647 45.836 0 0-42.383-35.695 69.647 142.08 44.164 0 1 74.415-29.46z",fill:"#ff5454"}),t("path",{class:"grow",d:"m154.22-118.36a69.647 142.08 44.164 0 0-32.183 47.565 142.08 69.647 45.836 0 0 28.479 34.525 142.08 69.647 45.836 0 0 25.258 22.895 69.647 142.08 44.164 0 1 33.243-53.199 142.08 69.647 45.836 0 0-17.084-19.383 142.08 69.647 45.836 0 0-37.714-32.403z",fill:"#87decd"}),t("path",{class:"grow",d:"m263.82-118.36a142.08 69.647 45.836 0 1 32.183 47.565 69.647 142.08 44.164 0 1-28.479 34.525 69.647 142.08 44.164 0 1-25.258 22.895 142.08 69.647 45.836 0 0-33.243-53.199 69.647 142.08 44.164 0 1 17.084-19.383 69.647 142.08 44.164 0 1 37.714-32.403z",fill:"#ae9dc8"}),t("path",{class:"grow",d:"m176.58-12.121a69.647 142.08 44.164 0 0-10.883 40.521 69.647 142.08 44.164 0 0 44.553-17.571 142.08 69.647 45.836 0 1-33.67-22.951z",fill:"#d4a17f"}),t("path",{class:"grow",d:"m242.46-12.957a142.08 69.647 45.836 0 1 10.883 40.521 142.08 69.647 45.836 0 1-44.553-17.571 69.647 142.08 44.164 0 0 33.67-22.951z",fill:"#9dc89d"}))),t("g",{fill:"#000000","font-family":"sans-serif","letter-spacing":"0px","word-spacing":"0px"},t("g",null,t("text",{x:"76.252144",y:"-64.079567","font-size":"44.126px","stroke-width":"1.1032",style:"line-height:1.25"},t("tspan",{x:"76.252144",y:"-64.079567","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[0])),t("text",{x:"149.03482",y:"-147.47998","font-size":"22.063px","stroke-width":"1.1032",style:"line-height:1.25"},t("tspan",{x:"149.03482",y:"-147.47998","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[1])),t("text",{x:"267.57089",y:"-147.47998",style:"line-height:1.25"},t("tspan",{x:"267.57089",y:"-147.47998","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[2])),t("text",{x:"343.84857",y:"-64.079567","text-align":"center","text-anchor":"middle",style:"line-height:1.25"},t("tspan",{x:"343.84857",y:"-64.079567","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[3])),t("text",{x:"210.03841",y:"51.429333",style:"line-height:1.25"},t("tspan",{x:"210.03841",y:"51.429333","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[8])),t("text",{x:"123.5993",y:"-106.48895",style:"line-height:1.25"},t("tspan",{x:"123.5993",y:"-106.48895","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[4])),t("text",{x:"208.53946",y:"-114.00911","font-size":"40.588px","stroke-width":"1.0147",style:"line-height:1.25"},t("tspan",{x:"208.53946",y:"-114.00911","font-size":"20.294px","stroke-width":"1.0147","text-align":"center","text-anchor":"middle"},this.innerValues[5])),t("text",{x:"295.77728",y:"-107.27691",style:"line-height:1.25"},t("tspan",{x:"295.77728",y:"-107.27691","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[6])),t("text",{x:"281.01645",y:"-1.6893667",style:"line-height:1.25"},t("tspan",{x:"281.01645",y:"-1.6893667","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[7])),t("text",{x:"132.64716",y:"-1.6893667",style:"line-height:1.25"},t("tspan",{x:"132.64716",y:"-1.6893667","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[9])),t("text",{x:"165.95892",y:"-63.150776",style:"line-height:1.25"},t("tspan",{x:"165.95892",y:"-63.150776","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[10])),t("text",{x:"251.96107",y:"-63.150776",style:"line-height:1.25"},t("tspan",{x:"251.96107",y:"-63.150776","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[11])),t("text",{x:"237.21414",y:"14.939892",style:"line-height:1.25"},t("tspan",{x:"237.21414",y:"14.939892","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[12])),t("text",{x:"182.8627",y:"15.776066",style:"line-height:1.25"},t("tspan",{x:"182.8627",y:"15.776066","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[13])),t("text",{x:"210.34605",y:"-11.144965",style:"line-height:1.25"},t("tspan",{x:"210.34605",y:"-11.144965","font-size":"22.063px","stroke-width":"1.1032","text-align":"center","text-anchor":"middle"},this.innerValues[14]))),t("text",{x:"127.57307",y:"-214.07426",style:"line-height:1.25"},t("tspan",{x:"127.57307",y:"-214.07426","font-size":"12.453px","stroke-width":"1.1675","text-align":"center","text-anchor":"middle"},this.innerLabels[1])),t("text",{x:"290.06705",y:"-214.07426",style:"line-height:1.25"},t("tspan",{x:"290.06705",y:"-214.07426","font-size":"12.453px","stroke-width":"1.1675","text-align":"center","text-anchor":"middle"},this.innerLabels[2])),t("text",{x:"28.304586",y:"-157.37126",style:"line-height:1.25"},t("tspan",{x:"28.304586",y:"-157.37126","font-size":"12.453px","stroke-width":"1.1675","text-align":"center","text-anchor":"middle"},this.innerLabels[0])),t("text",{x:"389.33554",y:"-157.37126","stroke-width":"1.1675",style:"line-height:1.25"},t("tspan",{x:"389.33554",y:"-157.37126","font-size":"12.453px","stroke-width":"1.1675","text-align":"center","text-anchor":"middle"},this.innerLabels[3]))))))},Object.defineProperty(e,"is",{get:function(){return"sepro-venn-4"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{labels:{type:String,attr:"labels",watchCallbacks:["labelsDidChangeHandler"]},scale:{type:Number,attr:"scale"},values:{type:String,attr:"values",watchCallbacks:["valuesDidChangeHandler"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".grow.sc-sepro-venn-4{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:.85}.grow.sc-sepro-venn-4:hover{opacity:1}text.sc-sepro-venn-4{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}"},enumerable:!0,configurable:!0}),e}();e.SeproVenn=n,e.SeproVenn2=i,e.SeproVenn3=s,e.SeproVenn4=l,Object.defineProperty(e,"__esModule",{value:!0})});