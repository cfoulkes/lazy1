import { Lazy1Page } from './app.po';

describe('lazy1 App', function() {
  let page: Lazy1Page;

  beforeEach(() => {
    page = new Lazy1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
