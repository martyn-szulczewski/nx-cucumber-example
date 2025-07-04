import { Given, Then, Before, After } from '@cucumber/cucumber';
import { Browser, chromium, expect, Page } from '@playwright/test';

let browser: Browser;
let page: Page;

Before(async function () {

  browser = await chromium.launch({ headless: false });

  const context = await browser.newContext();

  page = await context.newPage();

});

After(async function () {
  await browser.close();
})

Given('user is on the main page', async function () {
  await page.goto('http://localhost:4200');
});

Then('title should be {string}', async function (string) {
  const heading = await page.locator('h1').innerText();
  // eslint-disable-next-line playwright/no-standalone-expect
  expect(heading).toContain(string);
});
