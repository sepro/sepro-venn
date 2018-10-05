import { SeproVenn2 } from './sepro-venn-2';

describe('sepro-venn-2', () => {
  it('builds', () => {
    expect(new SeproVenn2()).toBeTruthy();
  });

  describe('dimensions', () => {
    it('returns correct width, height and transformation on default scale', () => {
      const component = new SeproVenn2();
      expect(component.width()).toEqual(296);
      expect(component.height()).toEqual(116);
      expect(component.transform()).toEqual('matrix(4 0 0 4 0 0)');
    });
  });
});
