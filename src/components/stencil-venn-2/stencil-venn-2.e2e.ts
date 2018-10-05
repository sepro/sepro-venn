import { newE2EPage } from '@stencil/core/testing';

describe('stencil-venn-2', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<stencil-venn-2 labels=\'["Left", "Right"]\' values=\'[1,2,3]\'></stencil-venn-2>');
    const element = await page.find('stencil-venn-2');
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
