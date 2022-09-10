import { test, expect } from '@playwright/test';

test('successfulAuthorization', async ({ page }) => {
    test.setTimeout(120000);
    // Go to https://netology.ru/?modal=sign_in
    await page.goto('https://netology.ru/?modal=sign_in');
    // Click [placeholder="Email"]
    await page.locator('[placeholder="Email"]').click();
    // Fill [placeholder="Email"]
    await page.locator('[placeholder="Email"]').fill('nezha2077@mail.ru');
    // Click [placeholder="Пароль"]
    await page.locator('[placeholder="Пароль"]').click();
    // Fill [placeholder="Пароль"]
    await page.locator('[placeholder="Пароль"]').fill('03021970oooOOO');
    // Click [data-testid="login-submit-btn"]
    await page.locator('[data-testid="login-submit-btn"]').click();
    await expect(page).toHaveURL('https://netology.ru/profile');
    expect(page.locator("text=Мои курсы и профессии").isVisible)
});

test('unsuccessfulAuthorization', async ({ page }) => {
    test.setTimeout(120000);
    // Go to https://netology.ru/?modal=sign_in
    await page.goto('https://netology.ru/?modal=sign_in');
    // Click [placeholder="Email"]
    await page.locator('[placeholder="Email"]').click();
    // Fill [placeholder="Email"]
    await page.locator('[placeholder="Email"]').fill('chtotoNevalidnoe@mail.ru');
    // Click [placeholder="Пароль"]
    await page.locator('[placeholder="Пароль"]').click();
    // Fill [placeholder="Пароль"]
    await page.locator('[placeholder="Пароль"]').fill('kakoitoparol');
    // Click [data-testid="login-submit-btn"]
    await page.locator('[data-testid="login-submit-btn"]').click();
    expect(page.locator('[data-testid="login-error-hint"]').isVisible);
});
