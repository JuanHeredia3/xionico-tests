import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../pages/Auth/LoginPage/LoginPage';
import { Fixtures } from './types';
import { NavbarComponent } from '../components/NavbarComponent/NavbarComponent';
import { OrdersPage } from '../pages/OrdersPage/OrdersPage';

export const test = baseTest.extend<Fixtures>({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
	navbar: async ({ page }, use) => {
		const navbar = new NavbarComponent(page);
		await use(navbar);
	},
	ordersPage: async ({ page }, use) => {
		const ordersPage = new OrdersPage(page);
		await use(ordersPage);
	},
});

export const expect = test.expect;