import { MeanLearnPage } from './app.po';

describe('mean-learn App', function() {
  let page: MeanLearnPage;

  beforeEach(() => {
    page = new MeanLearnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
