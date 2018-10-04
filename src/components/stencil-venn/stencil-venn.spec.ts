import { StencilVenn } from './stencil-venn';

describe('stencil-venn', () => {
  it('builds', () => {
    expect(new StencilVenn()).toBeTruthy();
  });

  describe('dimensions', () => {
    it('returns correct width, height and transformation on default scale', () => {
      const component = new StencilVenn();
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
