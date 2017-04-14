import { NgNingaPage } from './app.po';

describe('ng-ninga App', () => {
  let page: NgNingaPage;

  beforeEach(() => {
    page = new NgNingaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
