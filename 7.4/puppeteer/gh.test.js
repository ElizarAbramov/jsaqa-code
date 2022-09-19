let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {

  beforeEach(async () => {
    await page.setDefaultTimeout(120000);
    await page.goto("https://github.com/team");
  })

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  });

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free")
  });
});

describe("Github page tests", () => {

  test("The h1 header content on about page", async () => {
    await page.goto("https://github.com/about");
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("About · GitHub");

  });

  test("The h1 header content on features page", async () => {
    await page.goto("https://github.com/features");
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("Features | GitHub · GitHub");

  });

  test("The h1 header content on privacy page", async () => {
    await page.goto("https://github.com/privacy");
    await page.waitForSelector('h1');
    const actual = await page.title();
    expect(actual).toEqual("privacy · GitHub");

  });
});