import { element } from 'protractor';
import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should render photo list', () => {
    page.navigateTo();
    expect(page.getPhotoListComponents().count()).toBe(10);
  });
});
