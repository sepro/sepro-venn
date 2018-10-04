import { StencilVenn2 } from './stencil-venn-2';

describe('stencil-venn-2', () => {
  it('builds', () => {
    expect(new StencilVenn2()).toBeTruthy();
  });

  describe('dimensions', () => {
    it('returns correct width, height and transformation on default scale', () => {
      const component = new StencilVenn2();
      expect(component.width()).toEqual(296);
      expect(component.height()).toEqual(116);
      expect(component.transform()).toEqual('matrix(4 0 0 4 0 0)');
    });

    /*it('formats just first names', () => {
      const component = new StencilVenn();
      component.first = 'Joseph';
      expect(component.format()).toEqual('Joseph');
    });*/
  });
});
