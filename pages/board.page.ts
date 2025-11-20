import { Locator, Page } from '@playwright/test';
export class BoardPage {
  listAddButton: Locator;
  listNameField: Locator;
  listCreateButton: Locator;
  cardNameField: Locator;
  cardAddButton: Locator;
  cardCreateButton: Locator;

  constructor(private page: Page) {
    this.listAddButton = this.page.getByTestId('list-composer-button');
    this.listNameField = this.page.getByTestId('list-name-textarea');
    this.listCreateButton = this.page.getByTestId('list-composer-add-list-button');
    this.cardCreateButton = this.page.getByTestId('list-add-card-button');
    this.cardNameField = this.page.getByTestId('list-card-composer-textarea-xd');
    this.cardAddButton = this.page.getByTestId('list-card-composer-add-card-button');
  }

  async createNewList(page: Page, listName: string): Promise<void> {
    //await this.listAddButton.click();
    await this.listNameField.fill(listName);
    await this.listCreateButton.click();
  }
  async createNewCard(page: Page, cardName: string): Promise<void> {
    await this.cardCreateButton.click();
    await this.cardNameField.fill(cardName);
    await this.cardAddButton.click();
  }
}
