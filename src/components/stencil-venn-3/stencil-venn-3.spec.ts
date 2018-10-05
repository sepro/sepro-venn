import { StencilVenn3 } from './stencil-venn-3';

describe('stencil-venn-3', () => {
  it('builds', () => {
    expect(new StencilVenn3()).toBeTruthy();
  });

  describe('dimensions', () => {
    it('returns correct width, height and transformation on default scale', () => {
      const component = new StencilVenn3();
      expect(component.width()).toEqual(296);
      expect(component.height()).toEqual(260);
      expect(component.transform()).toEqual('matrix(1 0 0 1 0 0)');
    });

    /*it('formats just first names', () => {
      const component = new StencilVenn();
      component.first = 'Joseph';
      expect(component.format()).toEqual('Joseph');
    });*/
  });
});
