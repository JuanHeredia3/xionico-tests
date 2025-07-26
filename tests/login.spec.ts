import { test, expect } from "../fixtures/page-initialization";

test.describe("Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("login with valid credentials", async ({ page, loginPage }) => {
    await loginPage.loginElements.emailInput.fill(process.env.USERNAME!);
		await loginPage.loginElements.passwordInput.fill(process.env.PASSWORD!);
		await loginPage.loginElements.logInButton.click();
    
    await page.waitForURL(process.env.BASE_URL!);

    await expect(page.getByText('Inicio de sesión exitoso')).toBeVisible();
  });
});