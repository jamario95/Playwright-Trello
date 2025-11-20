import { Locator, Page } from '@playwright/test';
export class PulpitPage {
  workspaceButton: Locator;
  settingsButton: Locator;
  editWorkspaceButton: Locator;
  boardTitle: Locator;
  descriptionField: Locator;
  saveButton: Locator;
  createBoardButton: Locator;
  createBoardOption: Locator;
  createBoardSubmitButton: Locator;
  createBoardNameField: Locator;


  constructor(private page: Page) {
    this.workspaceButton = this.page.getByRole('link', { name: 'M Mariusz Januszek Board' });
    this.settingsButton = this.page.getByTestId('home-team-settings-tab');
    this.editWorkspaceButton = this.page.getByRole('heading', { name: 'Mariusz Januszek Board' }).getByRole('button');
    this.boardTitle = this.page.getByTestId('workspace-display-name');
    this.descriptionField = this.page.getByRole('textbox', { name: 'Description (optional)' });
    this.saveButton = this.page.getByRole('button', { name: 'Save' });

    this.createBoardButton = this.page.getByTestId('header-create-menu-button');
    this.createBoardOption = this.page.getByTestId('header-create-board-button');
    this.createBoardNameField = this.page.getByTestId('create-board-title-input');
    this.createBoardSubmitButton = this.page.getByTestId('create-board-submit-button');



    this.page.getByTestId('list-add-card-button')
    this.page.getByTestId('list-card-composer-textarea');
    this.page.getByTestId('list-card-composer-add-card-button');
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
  async createNewBoard(page: Page, boardName: string): Promise<void> {
    await this.createBoardButton.click();
    await this.createBoardOption.click();
    await this.createBoardNameField.fill(boardName);
    await this.createBoardSubmitButton.click();
  }
}
