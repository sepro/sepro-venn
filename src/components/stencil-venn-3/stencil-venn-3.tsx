import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-venn-3',
  styleUrl: 'stencil-venn-3.css',
  shadow: true
})
export class StencilVenn3 {
  @Prop() left: string;
  @Prop() right: string;
  @Prop() bottom: string;

  @Prop() values: string;

  @Prop() scale: number=1;

  get_value(pos: number): string {
    let _v = this.values.split(',');

    return _v[pos]
  }

  transform(): string {
    return ("matrix(" + this.scale + " 0 0 " + this.scale + " 0 0)")
  }

  width(): number {
    return (296*this.scale)
  }

  height(): number {
    return (260*this.scale)
  }

  render() {
    return <svg id="venn-svg" version="1.1" width={ this.width() } height={ this.height() }  xmlns="http://www.w3.org/2000/svg">
    <g transform={ this.transform() }>
      <g stroke="#fff" stroke-width="3">
      <path class="grow" d="m169.17 90.933a73.506 73.506 0 0 1-34.5 59.902 73.506 73.506 0 0 0 38.793 11.176 73.506 73.506 0 0 0 34.58-8.707 73.506 73.506 0 0 0-38.873-62.371z" fill="#aa87de"/>
      <path class="grow" d="m134.67 150.84a73.506 73.506 0 0 1-34.625-59.859 73.506 73.506 0 0 0-38.807 62.371 73.506 73.506 0 0 0 0 2e-3 73.506 73.506 0 0 0 2e-3 0 73.506 73.506 0 0 0 34.545 8.6621 73.506 73.506 0 0 0 38.885-11.176z" fill="#f95"/>
      <path class="grow" d="m134.58 26.175a73.506 73.506 0 0 0-34.621 62.33 73.506 73.506 0 0 0 0.0879 2.4707 73.506 73.506 0 0 1 34.58-8.7051 73.506 73.506 0 0 1 34.545 8.6621 73.506 73.506 0 0 0 0.12109-2.4277 73.506 73.506 0 0 0-34.713-62.33z" fill="#87de87"/>
      <path class="grow" d="m95.789 14.999a73.506 73.506 0 0 0-73.506 73.506 73.506 73.506 0 0 0 38.961 64.844 73.506 73.506 0 0 1 38.805-62.371 73.506 73.506 0 0 1-0.087904-2.4727 73.506 73.506 0 0 1 34.623-62.33 73.506 73.506 0 0 0-38.795-11.176z" fill="#fd5"/>
      <path class="grow" d="m134.58 26.175a73.506 73.506 0 0 1 34.711 62.33 73.506 73.506 0 0 1-0.12109 2.4277 73.506 73.506 0 0 1 38.873 62.373 73.506 73.506 0 0 0 38.928-64.801 73.506 73.506 0 0 0-73.508-73.506 73.506 73.506 0 0 0-38.883 11.176z" fill="#80b3ff"/>
      <path class="grow" d="m208.05 153.31a73.506 73.506 0 0 1-34.58 8.7051 73.506 73.506 0 0 1-38.793-11.176 73.506 73.506 0 0 1-38.885 11.176 73.506 73.506 0 0 1-34.545-8.6621 73.506 73.506 0 0 0-0.12109 2.4277 73.506 73.506 0 0 0 73.506 73.506 73.506 73.506 0 0 0 73.506-73.506 73.506 73.506 0 0 0-0.0879-2.4707z" fill="#f55"/>
      <path class="grow" d="m134.67 150.84a73.506 73.506 0 0 0 34.5-59.902 73.506 73.506 0 0 0-34.545-8.6621 73.506 73.506 0 0 0-34.58 8.707 73.506 73.506 0 0 0 34.625 59.857z" fill="#87decd"/>
      </g>
      <g fill="#000000" font-family="sans-serif" font-size="48px" letter-spacing="0px" stroke-width="1.0583" word-spacing="0px">
      <text x="72.733826" y="71.964066" style="line-height:1.25">
        <tspan x="72.733826" y="71.964066" font-size="16.933px" stroke-width="1.0583" text-align="center" text-anchor="middle">{ this.get_value(0) }</tspan>
      </text>
      <text x="134.6283" y="71.964066" style="line-height:1.25">
        <tspan x="134.6283" y="71.964066" font-size="16.933px" stroke-width="1.0583" text-align="center" text-anchor="middle">{ this.get_value(3) }</tspan>
      </text>
      <text x="196.47906" y="71.964066" style="line-height:1.25">
        <tspan x="196.47906" y="71.964066" font-size="16.933px" stroke-width="1.0583" text-align="center" text-anchor="middle">{ this.get_value(1) }</tspan>
      </text>
      <text x="15.367762" y="8.207531" style="line-height:1.25">
        <tspan x="15.367762" y="8.207531" font-size="11.289px" stroke-width="1.0583">{ this.left }</tspan>
      </text>
      <text x="249.91129" y="8.207531" style="line-height:1.25">
        <tspan x="249.91129" y="8.207531" font-size="11.289px" stroke-width="1.0583" text-align="end" text-anchor="end">{ this.right }</tspan>
      </text>
      <text x="134.35367" y="243.97731" style="line-height:1.25">
        <tspan x="134.35367" y="243.97731" font-size="11.289px" stroke-width="1.0583" text-align="center" text-anchor="middle">{ this.bottom }</tspan>
      </text>
      <text x="134.62927" y="200.15001" style="line-height:1.25">
        <tspan x="134.62927" y="200.15001" font-size="16.933px" stroke-width="1.0583" text-align="center" text-anchor="middle">{ this.get_value(2) }</tspan>
      </text>
      <text x="134.61136" y="118.76494" style="line-height:1.25">
        <tspan x="134.61136" y="118.76494" font-size="16.933px" stroke-width="1.0583" text-align="center" text-anchor="middle">{ this.get_value(6) }</tspan>
      </text>
      <text x="171.06842" y="142.40825" style="line-height:1.25">
        <tspan x="171.06842" y="142.40825" font-size="16.933px" stroke-width="1.0583" text-align="center" text-anchor="middle">{ this.get_value(4) }</tspan>
      </text>
      <text x="98.203461" y="142.40825" style="line-height:1.25">
        <tspan x="98.203461" y="142.40825" font-size="16.933px" stroke-width="1.0583" text-align="center" text-anchor="middle">{ this.get_value(5) }</tspan>
      </text>
      </g>
    </g>
   </svg>
 ;
  }
}
