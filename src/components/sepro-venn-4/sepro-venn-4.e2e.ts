import { newE2EPage } from '@stencil/core/testing';

describe('sepro-venn-3', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sepro-venn-3 labels=\'["Left", "Right", "Bottom"]\' values=\'[1,2,3,4,5,6,7]\'></sepro-venn-3>');
    const element = await page.find('sepro-venn-3');
    expect(element).toHaveClass('hydrated');
  });

  /*it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const component = await page.find('my-component');
    const element = await page.find('my-component >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });*/
});
