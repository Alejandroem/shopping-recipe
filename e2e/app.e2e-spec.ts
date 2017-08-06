import { ShoppingRecipePage } from './app.po';

describe('shopping-recipe App', () => {
  let page: ShoppingRecipePage;

  beforeEach(() => {
    page = new ShoppingRecipePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
