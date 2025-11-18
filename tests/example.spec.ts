import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import data from '../data/data.json';

test.describe('User login to Trello', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    const url = data.url.login;
    await page.goto(url);
    loginPage = new LoginPage(page);
  });
  test('should log in with valid credentials', async ({ page }) => {
    const usernamme = data.credentials.username;
    const password = data.credentials.password;

    await loginPage.login(usernamme, password);
  });
});
