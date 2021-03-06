/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SeproVenn {
        "labels": string;
        "scale": number;
        "values": string;
    }
    interface SeproVenn2 {
        "labels": string;
        "scale": number;
        "values": string;
    }
    interface SeproVenn3 {
        "labels": string;
        "scale": number;
        "values": string;
    }
    interface SeproVenn4 {
        "labels": string;
        "scale": number;
        "values": string;
    }
}
declare global {
    interface HTMLSeproVennElement extends Components.SeproVenn, HTMLStencilElement {
    }
    var HTMLSeproVennElement: {
        prototype: HTMLSeproVennElement;
        new (): HTMLSeproVennElement;
    };
    interface HTMLSeproVenn2Element extends Components.SeproVenn2, HTMLStencilElement {
    }
    var HTMLSeproVenn2Element: {
        prototype: HTMLSeproVenn2Element;
        new (): HTMLSeproVenn2Element;
    };
    interface HTMLSeproVenn3Element extends Components.SeproVenn3, HTMLStencilElement {
    }
    var HTMLSeproVenn3Element: {
        prototype: HTMLSeproVenn3Element;
        new (): HTMLSeproVenn3Element;
    };
    interface HTMLSeproVenn4Element extends Components.SeproVenn4, HTMLStencilElement {
    }
    var HTMLSeproVenn4Element: {
        prototype: HTMLSeproVenn4Element;
        new (): HTMLSeproVenn4Element;
    };
    interface HTMLElementTagNameMap {
        "sepro-venn": HTMLSeproVennElement;
        "sepro-venn-2": HTMLSeproVenn2Element;
        "sepro-venn-3": HTMLSeproVenn3Element;
        "sepro-venn-4": HTMLSeproVenn4Element;
    }
}
declare namespace LocalJSX {
    interface SeproVenn {
        "labels"?: string;
        "scale"?: number;
        "values"?: string;
    }
    interface SeproVenn2 {
        "labels"?: string;
        "scale"?: number;
        "values"?: string;
    }
    interface SeproVenn3 {
        "labels"?: string;
        "scale"?: number;
        "values"?: string;
    }
    interface SeproVenn4 {
        "labels"?: string;
        "scale"?: number;
        "values"?: string;
    }
    interface IntrinsicElements {
        "sepro-venn": SeproVenn;
        "sepro-venn-2": SeproVenn2;
        "sepro-venn-3": SeproVenn3;
        "sepro-venn-4": SeproVenn4;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sepro-venn": LocalJSX.SeproVenn & JSXBase.HTMLAttributes<HTMLSeproVennElement>;
            "sepro-venn-2": LocalJSX.SeproVenn2 & JSXBase.HTMLAttributes<HTMLSeproVenn2Element>;
            "sepro-venn-3": LocalJSX.SeproVenn3 & JSXBase.HTMLAttributes<HTMLSeproVenn3Element>;
            "sepro-venn-4": LocalJSX.SeproVenn4 & JSXBase.HTMLAttributes<HTMLSeproVenn4Element>;
        }
    }
}
