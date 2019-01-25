import { SeproVenn4 } from './sepro-venn-4';

describe('sepro-venn-4', () => {
  it('builds', () => {
    expect(new SeproVenn4()).toBeTruthy();
  });

  describe('dimensions', () => {
    it('returns correct width, height and transformation on default scale', () => {
      const component = new SeproVenn4();
      expect(component.width()).toEqual(435);
      expect(component.height()).toEqual(312);
      expect(component.transform()).toEqual('matrix(1 0 0 1 0 0)');
    });
  });
});
