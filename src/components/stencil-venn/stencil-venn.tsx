import { Component, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'stencil-venn',
  styleUrl: 'stencil-venn.css',
  shadow: true
})
export class StencilVenn {
  @Prop() labels: string;
  @Prop() values: string;

  @Prop() scale: number=1;

  innerLabels: string[] = [];
  innerValues: string[] = [];

  componentWillLoad() {
    this.innerLabels = JSON.parse(this.labels);
    this.innerValues = JSON.parse(this.values)
  }  

  @Watch('labels')
  labelsDidChangeHandler(newValue: string) {
    this.innerLabels = JSON.parse(newValue);
  }

  render() {
    if (this.innerLabels.length == 2) {
      return <stencil-venn-2 labels={ this.labels } values={ this.values } scale={ this.scale }></stencil-venn-2>
    } else if (this.innerLabels.length == 3) {
      return <stencil-venn-3 labels={ this.labels } values={ this.values } scale={ this.scale }></stencil-venn-3>
    } else {
      return <div><p>ERROR: Unsupported number of categories</p></div>
    }
      
  }
}
