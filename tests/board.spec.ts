import { test, expect } from '@playwright/test';
import { PulpitPage } from '../pages/pulpit.page';
import { LoginPage } from '../pages/login.page';
import { BoardPage } from '../pages/board.page';
import data from '../data/data.json';

test.describe('User creates new list and card', () => {
  let pulpitPage: PulpitPage;
  let loginPage: LoginPage;
  let boardPage: BoardPage;
  test.beforeEach(async ({ page }) => {
    //Arrange
    const url = data.url.login;
    const usernamme = data.credentials.username;
    const password = data.credentials.password;

    loginPage = new LoginPage(page);
    pulpitPage = new PulpitPage(page);
    boardPage = new BoardPage(page);
    //Act
    await page.goto(url);
    await loginPage.login(usernamme, password);
    await pulpitPage.createNewBoard(page, data.testBoard.name);
  });
  test('create new List and new card', async ({ page }) => {
    //Arrange
    const newListName = data.list.name;
    const newCardName = data.card.name;
    //Act
    await boardPage.createNewList(page, newListName);
    await boardPage.createNewCard(page, newCardName);
    //Assert
  });
  // test('create new Card', async ({ page }) => {
  //   const newCardName = data.card.name;
  //   await boardPage.createNewCard(page, newCardName);
  // });
});
