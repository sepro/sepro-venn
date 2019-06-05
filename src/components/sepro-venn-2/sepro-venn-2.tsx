import { Component, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'sepro-venn-2',
  styleUrl: '../sepro-venn.css',
  shadow: true
})
export class SeproVenn2 {
  @Prop() labels: string;
  @Prop() values: string;

  @Prop() scale: number=1;

  innerLabels: string[] = [];
  innerValues: string[] = [];

  transform(): string {
    return ("matrix(" + this.scale*4 + " 0 0 " + this.scale*4 + " 0 0)")
  }

  width(): number {
    return (296*this.scale)
  }

  height(): number {
    return (116*this.scale)
  }

  componentWillLoad() {
    this.innerLabels = JSON.parse(this.labels);
    this.innerValues = JSON.parse(this.values)
  }  

  @Watch('labels')
  labelsDidChangeHandler(newValue: string) {
    this.innerLabels = JSON.parse(newValue);
  }

  @Watch('values')
  valuesDidChangeHandler(newValue: string) {
    this.innerValues = JSON.parse(newValue);
  } 

  render() {
    return <svg id="venn-svg" width={ this.width() } height={ this.height() } version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g transform={ this.transform() }>
     <g stroke="#fff" stroke-width="0.5">
      <path class="grow" d="m34.019 5.1642a17.236 13.106 0 0 0-6.2043 10.054 17.236 13.106 0 0 0 6.1842 10.055 17.236 13.106 0 0 0 6.2038-10.055 17.236 13.106 0 0 0-6.1837-10.054z" fill="#87de87"/>
      <path class="grow" d="m22.385 1.4226a18.143 13.796 0 0 0-18.143 13.796 18.143 13.796 0 0 0 18.143 13.796 18.143 13.796 0 0 0 11.612-3.2127 18.143 13.796 0 0 1-6.5097-10.583 18.143 13.796 0 0 1 6.5309-10.584 18.143 13.796 0 0 0-11.633-3.2122z" fill="#fd5"/>
      <path class="grow" d="m34.019 4.6348a18.143 13.796 0 0 1 6.5097 10.584 18.143 13.796 0 0 1-6.5309 10.583 18.143 13.796 0 0 0 11.633 3.2127 18.143 13.796 0 0 0 18.143-13.796 18.143 13.796 0 0 0-18.143-13.796 18.143 13.796 0 0 0-11.612 3.2122z" fill="#80b3ff"/>
     </g>
      <text class="text_value_2" x="19.130795" y="16.756538"><tspan text-align="center" text-anchor="middle">{ this.innerValues[0] }</tspan></text>
      <text class="text_value_2" x="34.008442" y="16.756538"><tspan text-align="center" text-anchor="middle">{ this.innerValues[2] }</tspan></text>
      <text class="text_value_2" x="48.885826" y="16.756538"><tspan text-align="center" text-anchor="middle">{ this.innerValues[1] }</tspan></text>
      <text class="text_label_2" x="4.6216135" y="3.0707977"><tspan text-align="left" text-anchor="middle">{ this.innerLabels[0] }</tspan></text>
      <text class="text_label_2" x="63.257492" y="3.0707977"><tspan text-align="right" text-anchor="middle">{ this.innerLabels[1] }</tspan></text>
    </g>
   </svg>;
  }
}
