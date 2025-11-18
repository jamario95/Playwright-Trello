import { Locator, Page } from '@playwright/test';
export class PulpitPage {
  workspaceButton: Locator;
  settingsButton: Locator;
  editWorkspaceButton: Locator;
  boardTitle: Locator;
  descriptionField: Locator;
  saveButton: Locator;
  constructor(private page: Page) {
    this.workspaceButton = this.page.getByRole('link', { name: 'M Mariusz Januszek Board' });
    this.settingsButton = this.page.getByTestId('home-team-settings-tab');
    this.editWorkspaceButton = this.page.getByRole('heading', { name: 'Mariusz Januszek Board' }).getByRole('button');
    this.boardTitle = this.page.getByTestId('workspace-display-name');
    this.descriptionField = this.page.getByRole('textbox', { name: 'Description (optional)' });
    this.saveButton = this.page.getByRole('button', { name: 'Save' });
  }
  async editWorkspace(title: string, description: string): Promise<void> {
    await this.workspaceButton.click();
    await this.settingsButton.click();
    await this.editWorkspaceButton.click();
    await this.boardTitle.click();
    await this.boardTitle.fill(title);
    await this.boardTitle.click();
    await this.descriptionField.fill(description);
    await this.saveButton.click();
  }
}

//   await page.goto('https://trello.com/');
//   await page.getByTestId('header-create-menu-button').click();
//   await page.getByTestId('header-create-board-button').click();
//   await page.getByTestId('create-board-title-input').fill('xd');
//   await page.getByTestId('create-board-submit-button').click();
//   await page.getByTestId('list-name-textarea').fill('New List');
//   await page.getByTestId('list-composer-add-list-button').click();
//   await page.getByTestId('list-add-card-button').click();
//   await page.getByTestId('list-card-composer-textarea').fill('New Card');
//   await page.getByTestId('list-card-composer-add-card-button').click();

//   await page.getByTestId('home-team-settings-tab').click();
//   await page.getByRole('heading', { name: 'Mariusz Januszek Board' }).getByRole('button').click();
//   await page.getByTestId('workspace-display-name').click();
//   await page.getByTestId('workspace-display-name').fill('Mariusz Januszek Board');
//   await page.getByTestId('workspace-display-name').click();
//   await page.getByRole('textbox', { name: 'Opis (opcjonalnie)' }).fill('New Description!New Description!!!!!');
//   await page.getByRole('button', { name: 'Zapisz' }).click();
