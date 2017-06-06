import { MyApp4Page } from './app.po';

describe('my-app4 App', () => {
  let page: MyApp4Page;

  beforeEach(() => {
    page = new MyApp4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
