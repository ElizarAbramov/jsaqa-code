const { clickElement, putText, getText } = require("./lib/commands.js");
const { expect } = require("chai");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://qamid.tmweb.ru/client/index.php");
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("IdemVKinoHappyPathTests", () => {

  test("The first happy path test", async () => {
    await clickElement(page, 'a[data-seance-id="129"]');
    await clickElement(page, 'span:nth-child(3)');
    await clickElement(page, 'button[class="acceptin-button"]');
    await clickElement(page, 'button');
    const actual = await getText(page, 'h2');
    await expect(actual).contain("Электронный билет");
  });


  test("The second happy path test", async () => {
    await clickElement(page, 'a:nth-child(4)');
    await clickElement(page, 'a[data-seance-id="129"]');
    await clickElement(page, 'div:nth-child(1) span:nth-child(4)');
    await clickElement(page, 'button[class="acceptin-button"]');
    await clickElement(page, 'button');
    const actual = await getText(page, 'h2');
    await expect(actual).contain("Электронный билет");
  });

  test.only("Sad path test", async () => {
    await clickElement(page, 'a:nth-child(4)');
    await clickElement(page, 'a[data-seance-id="129"]');
    await clickElement(page, 'div:nth-child(1) > span:nth-child(4)');
    await clickElement(page, 'button[class="acceptin-button"');
    const actual = await page.$eval('button[class="acceptin-button"', (element) => element.disabled);
    await expect(actual).to.equal(true);
  })
});
