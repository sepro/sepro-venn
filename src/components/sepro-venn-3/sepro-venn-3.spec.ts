import { SeproVenn3 } from './sepro-venn-3';

describe('sepro-venn-3', () => {
  it('builds', () => {
    expect(new SeproVenn3()).toBeTruthy();
  });

  describe('dimensions', () => {
    it('returns correct width, height and transformation on default scale', () => {
      const component = new SeproVenn3();
      expect(component.width()).toEqual(296);
      expect(component.height()).toEqual(260);
      expect(component.transform()).toEqual('matrix(1 0 0 1 0 0)');
    });
  });
});
