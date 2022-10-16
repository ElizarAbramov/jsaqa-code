const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText, clickElement } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});


Given('user is on {string} page', { timeout: 60000 }, async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client${string}.php`);
});


When('user click on {string}', { timeout: 30000 }, async function (string) {
  return await clickElement(this.page, string);
});

Wnen('user is on {string} page', { timeout: 30000 }, async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client${string}.php`)
});

And("user click on {string}", async function (string) {
  return await clickElement(this.page, string);
});

And("user click on {string}", async function (string) {
  return await clickElement(this.page, string);
});

When('user is on {string} page', async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client${string}.php`)
});

And("user click on {string}", async function (string) {
  return await clickElement(this.page, string);
});

When('user is on {string} page', { timeout: 30000 }, async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client${string}.php`)
});

Then('user sees {string}', async function (string) {
  const actual = await getText(this.page, 'h2');
  expect(actual).contain(string);
});



Given('user is on {string} page', { timeout: 60000 }, async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client${string}.php`);
});


When('user click on {string}', { timeout: 30000 }, async function (string) {
  return await clickElement(this.page, string);
});

And('user click on {string}', { timeout: 30000 }, async function (string) {
  return await clickElement(this.page, string);
});

When('user click on {string}', { timeout: 30000 }, async function (string) {
  return await clickElement(this.page, string);
});

And('user click on {string}', { timeout: 30000 }, async function (string) {
  return await clickElement(this.page, string);
});

And("user click on {string}", async function (string) {
  return await clickElement(this.page, string);
});

When('user click on {string}', { timeout: 30000 }, async function (string) {
  return await clickElement(this.page, string);
});

And("user click on {string}", async function (string) {
  return await clickElement(this.page, string);
});

When('user is on {string} page', async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client${string}.php`)
});

Then('user sees {string}', async function (string) {
  const actual = await getText(this.page, 'h2');
  expect(actual).contain(string);
});



Given('user is on {string} page', { timeout: 60000 }, async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client${string}.php`);
});

When('user click on {string}', { timeout: 30000 }, async function (string) {
  return await clickElement(this.page, string);
});

When('user click on {string}', { timeout: 30000 }, async function (string) {
  return await clickElement(this.page, string);
});

And("user click on {string}", async function (string) {
  return await clickElement(this.page, string);
});

Then('user stay at the same page and {string}', async function (string) {
  const actual = await page.waitForSelector('button[class="acceptin-button"');
  expect(actual).contain(string);
});