import { FinanceAppPage } from './app.po';

describe('finance-app App', () => {
  let page: FinanceAppPage;

  beforeEach(() => {
    page = new FinanceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
