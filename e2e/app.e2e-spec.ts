import { RomainPage } from './app.po';

describe('romain App', function() {
  let page: RomainPage;

  beforeEach(() => {
    page = new RomainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
