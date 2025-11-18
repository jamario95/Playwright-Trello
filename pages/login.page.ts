import { Page, Locator } from '@playwright/test';

export class LoginPage {
  loginInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  constructor(private page: Page) {
    this.loginInput = this.page.getByTestId('username');
    this.passwordInput = this.page.getByTestId('password');
    this.loginButton = this.page.getByTestId('login-submit-idf-testid');
  }

  async login(username: string, password: string): Promise<void> {
    await this.loginInput.fill(username);
    await this.loginButton.click();
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
