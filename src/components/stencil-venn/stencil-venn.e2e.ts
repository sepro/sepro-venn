import { newE2EPage } from '@stencil/core/testing';

describe('stencil-venn', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<stencil-venn left="A" right="B" left_value="0" intersection_value="0" right_value="0"></stencil-venn');
    const element = await page.find('stencil-venn');
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
