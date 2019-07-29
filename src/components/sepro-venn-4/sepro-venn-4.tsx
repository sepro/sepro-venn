import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'sepro-venn-4',
  styleUrl: '../sepro-venn.css',
  shadow: true
})
export class SeproVenn4 {
  @Prop() labels: string;
  @Prop() values: string;

  @Prop() scale: number=1;

  innerLabels: string[] = [];
  innerValues: string[] = [];

  componentWillLoad() {
    this.innerLabels = JSON.parse(this.labels);
    this.innerValues = JSON.parse(this.values)
  }  

  transform(): string {
    return ("matrix(" + this.scale + " 0 0 " + this.scale + " 0 0)")
  }

  width(): number {
    return (435*this.scale)
  }

  height(): number {
    return (312*this.scale)
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
    return <svg id="venn-svg" version="1.1" width={ this.width() } height={ this.height() }  xmlns="http://www.w3.org/2000/svg">
    <g transform={ this.transform() }>
    <g transform="translate(-1.3516 228.47)">
      <g fill-opacity=".87843" stroke="#fff" stroke-miterlimit="10">
      <g stroke-width="4.1694">
        <path class="grow" d="m210.25 10.685a69.647 142.08 44.164 0 1-44.538 17.569 69.647 142.08 44.164 0 0 11.544 38.1 69.647 142.08 44.164 0 0 10.12 6.7008 142.08 69.647 45.836 0 0 54.414-7.5368 142.08 69.647 45.836 0 0 11.544-38.1 142.08 69.647 45.836 0 1-43.085-16.733z" fill="#d4c37f"/>
        <path class="grow" d="m77.257-149.25a142.08 69.647 45.836 0 0-6.1621 0.0713 142.08 69.647 45.836 0 0-27.269 10.851 142.08 69.647 45.836 0 0 49.028 150.45 142.08 69.647 45.836 0 0 94.526 60.93 69.647 142.08 44.164 0 1-10.112-6.6965 69.647 142.08 44.164 0 1-11.559-38.098 69.647 142.08 44.164 0 1-46.944-9.2626 69.647 142.08 44.164 0 1 4.098-88.703 142.08 69.647 45.836 0 1-32.11-77.917 142.08 69.647 45.836 0 0-13.496-1.6224z" fill="#ffdd54"/>
        <path class="grow" d="m122.9-69.528a69.647 142.08 44.164 0 0-4.1282 88.655 69.647 142.08 44.164 0 0 46.94 9.1269 69.647 142.08 44.164 0 1 10.872-40.375 142.08 69.647 45.836 0 1-25.22-22.983 142.08 69.647 45.836 0 1-28.464-34.424z" fill="#ff9954"/>
        <path class="grow" d="m341.79-150.09a69.647 142.08 44.164 0 1 6.1622 0.0713 69.647 142.08 44.164 0 1 27.269 10.851 69.647 142.08 44.164 0 1-49.028 150.45 69.647 142.08 44.164 0 1-94.526 60.93 142.08 69.647 45.836 0 0 10.112-6.6965 142.08 69.647 45.836 0 0 11.559-38.098 142.08 69.647 45.836 0 0 46.944-9.2626 142.08 69.647 45.836 0 0-4.0981-88.703 69.647 142.08 44.164 0 0 32.11-77.917 69.647 142.08 44.164 0 1 13.496-1.6224z" fill="#8f8f8f"/>
        <path class="grow" d="m296.14-70.364a142.08 69.647 45.836 0 1 4.1282 88.655 142.08 69.647 45.836 0 1-46.94 9.1269 142.08 69.647 45.836 0 0-10.872-40.375 69.647 142.08 44.164 0 0 25.22-22.983 69.647 142.08 44.164 0 0 28.464-34.424z" fill="#a0b9df"/>
        <path class="grow" d="m90.753-147.63a142.08 69.647 45.836 0 0 32.123 77.826 69.647 142.08 44.164 0 1 32.185-47.567 142.08 69.647 45.836 0 0-64.308-30.259z" fill="#87de87"/>
        <path class="grow" d="m328.29-148.46a69.647 142.08 44.164 0 1-32.123 77.826 142.08 69.647 45.836 0 0-32.185-47.567 69.647 142.08 44.164 0 1 64.308-30.259z" fill="#d47f7f"/>
        <path class="grow" d="m209.88-65.572a69.647 142.08 44.164 0 0-33.256 53.275 142.08 69.647 45.836 0 0 33.627 22.983 69.647 142.08 44.164 0 0 32.799-22.552 142.08 69.647 45.836 0 0-33.17-53.705z" fill="#9dc8c0"/>
        <path class="grow" d="m209.32-167.19a68.32 139.37 44.164 0 0-41.569 35.011 68.32 139.37 44.164 0 0-12.432 13.814 139.37 68.32 45.836 0 1 36.938 31.824 139.37 68.32 45.836 0 1 16.769 19.001 68.32 139.37 44.164 0 1 16.114-18.181 68.32 139.37 44.164 0 1 37.801-32.462 139.37 68.32 45.836 0 0-13.294-14.816 139.37 68.32 45.836 0 0-40.327-34.191z" fill="#aa87de" stroke-width="4.09"/>
        <path class="grow" d="m134.9-197.62a142.08 69.647 45.836 0 0-6.1621 0.0711 142.08 69.647 45.836 0 0-27.271 10.851 142.08 69.647 45.836 0 0-11.574 38.093 142.08 69.647 45.836 0 1 64.366 30.19 69.647 142.08 44.164 0 1 12.673-14.05 69.647 142.08 44.164 0 1 42.383-35.695 142.08 69.647 45.836 0 0-74.415-29.46z" fill="#80b3ff"/>
        <path class="grow" d="m283.34-197.41a69.647 142.08 44.164 0 1 6.1621 0.0711 69.647 142.08 44.164 0 1 27.271 10.851 69.647 142.08 44.164 0 1 11.574 38.093 69.647 142.08 44.164 0 0-64.366 30.19 142.08 69.647 45.836 0 0-12.673-14.05 142.08 69.647 45.836 0 0-42.383-35.695 69.647 142.08 44.164 0 1 74.415-29.46z" fill="#ff5454"/>
        <path class="grow" d="m154.22-118.36a69.647 142.08 44.164 0 0-32.183 47.565 142.08 69.647 45.836 0 0 28.479 34.525 142.08 69.647 45.836 0 0 25.258 22.895 69.647 142.08 44.164 0 1 33.243-53.199 142.08 69.647 45.836 0 0-17.084-19.383 142.08 69.647 45.836 0 0-37.714-32.403z" fill="#87decd"/>
        <path class="grow" d="m263.82-118.36a142.08 69.647 45.836 0 1 32.183 47.565 69.647 142.08 44.164 0 1-28.479 34.525 69.647 142.08 44.164 0 1-25.258 22.895 142.08 69.647 45.836 0 0-33.243-53.199 69.647 142.08 44.164 0 1 17.084-19.383 69.647 142.08 44.164 0 1 37.714-32.403z" fill="#ae9dc8"/>
        <path class="grow" d="m176.58-12.121a69.647 142.08 44.164 0 0-10.883 40.521 69.647 142.08 44.164 0 0 44.553-17.571 142.08 69.647 45.836 0 1-33.67-22.951z" fill="#d4a17f"/>
        <path class="grow" d="m242.46-12.957a142.08 69.647 45.836 0 1 10.883 40.521 142.08 69.647 45.836 0 1-44.553-17.571 69.647 142.08 44.164 0 0 33.67-22.951z" fill="#9dc89d"/>
      </g>
      </g>
      <g>
      <g>
        <text class="text_value_4" x="76.252144" y="-64.079567"><tspan text-align="center" text-anchor="middle">{ this.innerValues[0] }</tspan></text>
        <text class="text_value_4" x="149.03482" y="-147.47998"><tspan text-align="center" text-anchor="middle">{ this.innerValues[1] }</tspan></text>
        <text class="text_value_4" x="267.57089" y="-147.47998"><tspan text-align="center" text-anchor="middle">{ this.innerValues[2] }</tspan></text>
        <text class="text_value_4" x="343.84857" y="-64.079567"><tspan text-align="center" text-anchor="middle">{ this.innerValues[3] }</tspan></text>
        <text class="text_value_4" x="210.03841" y="51.429333"><tspan text-align="center" text-anchor="middle">{ this.innerValues[8] }</tspan></text>
        <text class="text_value_4" x="123.5993" y="-106.48895"><tspan text-align="center" text-anchor="middle">{ this.innerValues[4] }</tspan></text>
        <text class="text_value_4" x="208.53946" y="-114.00911"><tspan text-align="center" text-anchor="middle">{ this.innerValues[5] }</tspan></text>
        <text class="text_value_4" x="295.77728" y="-107.27691"><tspan text-align="center" text-anchor="middle">{ this.innerValues[6] }</tspan></text>
        <text class="text_value_4" x="281.01645" y="-1.6893667"><tspan text-align="center" text-anchor="middle">{ this.innerValues[7] }</tspan></text>
        <text class="text_value_4" x="132.64716" y="-1.6893667"><tspan text-align="center" text-anchor="middle">{ this.innerValues[9] }</tspan></text>
        <text class="text_value_4" x="165.95892" y="-63.150776"><tspan text-align="center" text-anchor="middle">{ this.innerValues[10] }</tspan></text>
        <text class="text_value_4" x="251.96107" y="-63.150776"><tspan text-align="center" text-anchor="middle">{ this.innerValues[11] }</tspan></text>
        <text class="text_value_4" x="237.21414" y="14.939892"><tspan text-align="center" text-anchor="middle">{ this.innerValues[12] }</tspan></text>
        <text class="text_value_4" x="182.8627" y="15.776066"><tspan text-align="center" text-anchor="middle">{ this.innerValues[13] }</tspan></text>
        <text class="text_value_4" x="210.34605" y="-11.144965"><tspan text-align="center" text-anchor="middle">{ this.innerValues[14] }</tspan></text>
      </g>
        <text class="text_label_4" x="127.57307" y="-214.07426">
          <tspan x="127.57307" y="-214.07426" text-align="center" text-anchor="middle">{ this.innerLabels[1] }</tspan>
        </text>
        <text class="text_label_4" x="290.06705" y="-214.07426">
          <tspan x="290.06705" y="-214.07426" text-align="center" text-anchor="middle">{ this.innerLabels[2] }</tspan>
        </text>
        <text class="text_label_4" x="28.304586" y="-157.37126">
          <tspan x="28.304586" y="-157.37126" text-align="center" text-anchor="middle">{ this.innerLabels[0] }</tspan>
        </text>
        <text class="text_label_4" x="389.33554" y="-157.37126">
          <tspan x="389.33554" y="-157.37126" text-align="center" text-anchor="middle">{ this.innerLabels[3] }</tspan>
        </text>
      </g>
    </g>
    </g> 
   </svg>
 ;
  }
}
