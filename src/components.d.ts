/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface StencilVenn2 {
    'intersection_value': string;
    'left': string;
    'left_value': string;
    'right': string;
    'right_value': string;
    'scale': number;
  }
  interface StencilVenn2Attributes extends StencilHTMLAttributes {
    'intersection_value'?: string;
    'left'?: string;
    'left_value'?: string;
    'right'?: string;
    'right_value'?: string;
    'scale'?: number;
  }

  interface StencilVenn3 {
    'bottom': string;
    'left': string;
    'right': string;
    'scale': number;
    'values': string;
  }
  interface StencilVenn3Attributes extends StencilHTMLAttributes {
    'bottom'?: string;
    'left'?: string;
    'right'?: string;
    'scale'?: number;
    'values'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'StencilVenn2': Components.StencilVenn2;
    'StencilVenn3': Components.StencilVenn3;
  }

  interface StencilIntrinsicElements {
    'stencil-venn-2': Components.StencilVenn2Attributes;
    'stencil-venn-3': Components.StencilVenn3Attributes;
  }


  interface HTMLStencilVenn2Element extends Components.StencilVenn2, HTMLStencilElement {}
  var HTMLStencilVenn2Element: {
    prototype: HTMLStencilVenn2Element;
    new (): HTMLStencilVenn2Element;
  };

  interface HTMLStencilVenn3Element extends Components.StencilVenn3, HTMLStencilElement {}
  var HTMLStencilVenn3Element: {
    prototype: HTMLStencilVenn3Element;
    new (): HTMLStencilVenn3Element;
  };

  interface HTMLElementTagNameMap {
    'stencil-venn-2': HTMLStencilVenn2Element
    'stencil-venn-3': HTMLStencilVenn3Element
  }

  interface ElementTagNameMap {
    'stencil-venn-2': HTMLStencilVenn2Element;
    'stencil-venn-3': HTMLStencilVenn3Element;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
