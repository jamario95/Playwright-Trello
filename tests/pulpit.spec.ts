import { test, expect } from '@playwright/test';
import { PulpitPage } from '../pages/pulpit.page';
import { LoginPage } from '../pages/login.page';
import data from '../data/data.json';

test.describe('User edits workspace details', () => {
  let pulpitPage: PulpitPage;
  let loginPage: LoginPage;
  test.beforeEach(async ({ page }) => {
    const url = data.url.login;
    await page.goto(url);
    const usernamme = data.credentials.username;
    const password = data.credentials.password;

    loginPage = new LoginPage(page);
    pulpitPage = new PulpitPage(page);

    await loginPage.login(usernamme, password);
  });
  test('should edit workspace title and description', async ({ page }) => {
    const newTitle = data.workspace.name;
    const newDescription = data.workspace.description;
    await pulpitPage.editWorkspace(newTitle, newDescription);
  });
  test('should create new board, new card and new task', async ({ page }) => {
    const newBoardName = data.testBoard.name;
    const newListName = data.list.name;
    const newTaskName = data.card.name;

    await pulpitPage.createNewBoard(page, newBoardName);
  });
});
