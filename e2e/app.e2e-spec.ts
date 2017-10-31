import { NgPwaPage } from './app.po';

describe('ng-pwa App', () => {
  let page: NgPwaPage;

  beforeEach(() => {
    page = new NgPwaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
