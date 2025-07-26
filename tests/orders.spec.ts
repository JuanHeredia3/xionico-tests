import { test, expect } from "../fixtures/page-initialization";

test.describe("Orders Tests", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
  });

  test("orders screen sanity check", async ({ page, navbar, ordersPage }) => {
		await navbar.navigateTo('orders');

		await expect(page).toHaveURL(`${process.env.BASE_URL}/pedidos`);
		await expect(ordersPage.ordersElements.table).toBeVisible();
		await expect(ordersPage.ordersElements.tableElements.businessName).toBeVisible();
		await expect(ordersPage.ordersElements.tableElements.orderNumber).toBeVisible();
		await expect(ordersPage.ordersElements.tableElements.salespersonId).toBeVisible();
		await expect(ordersPage.ordersElements.tableElements.order).toBeVisible();
		await expect(ordersPage.ordersElements.tableElements.delivery).toBeVisible();
		await expect(ordersPage.ordersElements.tableElements.export).toBeVisible();
		await expect(ordersPage.ordersElements.tableElements.totalAmount).toBeVisible();
		await expect(ordersPage.ordersElements.tableElements.customer).toBeVisible();
  });
});