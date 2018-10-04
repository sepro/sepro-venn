import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-venn',
  styleUrl: 'stencil-venn.css',
  shadow: true
})
export class StencilVenn {
  @Prop() left: string;
  @Prop() right: string;

  @Prop() left_value: string;
  @Prop() intersection_value: string;
  @Prop() right_value: string;

  @Prop() scale: number=4;

  transform(): string {
    return ("matrix(" + this.scale + " 0 0 " + this.scale + " 0 0)")
  }

  width(): number {
    return (74*this.scale)
  }

  height(): number {
    return (29*this.scale)
  }

  render() {
    return <svg id="venn-svg" width={ this.width() } height={ this.height() } version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g transform={ this.transform() }>
     <g>
      <path d="m34.019 5.1642a17.236 13.106 0 0 0-6.2043 10.054 17.236 13.106 0 0 0 6.1842 10.055 17.236 13.106 0 0 0 6.2038-10.055 17.236 13.106 0 0 0-6.1837-10.054z" fill="#87de87"/>
      <path d="m22.385 1.4226a18.143 13.796 0 0 0-18.143 13.796 18.143 13.796 0 0 0 18.143 13.796 18.143 13.796 0 0 0 11.612-3.2127 18.143 13.796 0 0 1-6.5097-10.583 18.143 13.796 0 0 1 6.5309-10.584 18.143 13.796 0 0 0-11.633-3.2122z" fill="#fd5"/>
      <path d="m34.019 4.6348a18.143 13.796 0 0 1 6.5097 10.584 18.143 13.796 0 0 1-6.5309 10.583 18.143 13.796 0 0 0 11.633 3.2127 18.143 13.796 0 0 0 18.143-13.796 18.143 13.796 0 0 0-18.143-13.796 18.143 13.796 0 0 0-11.612 3.2122z" fill="#80b3ff"/>
     </g>
     <g fill="#000000" font-family="sans-serif" font-size="10.583px" letter-spacing="0px" stroke-width=".26458" word-spacing="0px">
      <text x="19.130795" y="16.756538" style="line-height:1.25"><tspan x="19.130795" y="16.756538" font-size="4.2333px" stroke-width=".26458" text-align="center" text-anchor="middle">{ this.left_value }</tspan></text>
      <text x="34.008442" y="16.756538" style="line-height:1.25"><tspan x="34.008442" y="16.756538" font-size="4.2333px" stroke-width=".26458" text-align="center" text-anchor="middle">{ this.intersection_value }</tspan></text>
      <text x="48.885826" y="16.756538" style="line-height:1.25"><tspan x="48.885826" y="16.756538" font-size="4.2333px" stroke-width=".26458" text-align="center" text-anchor="middle">{ this.right_value }</tspan></text>
      <text x="4.6216135" y="3.0707977" style="line-height:1.25"><tspan x="4.6216135" y="3.0707977" font-size="2.8222px" stroke-width=".26458">{ this.left }</tspan></text>
      <text x="63.257492" y="3.0707977" style="line-height:1.25"><tspan x="63.257492" y="3.0707977" font-size="2.8222px" stroke-width=".26458" text-align="end" text-anchor="end">{ this.right }</tspan></text>
     </g>
    </g>
   </svg>
 ;
  }
}
