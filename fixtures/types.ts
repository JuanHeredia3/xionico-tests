import type { Page } from '@playwright/test';
import { LoginPage } from '../pages/Auth/LoginPage/LoginPage';
import { NavbarComponent } from '../components/NavbarComponent/NavbarComponent';
import { OrdersPage } from '../pages/OrdersPage/OrdersPage';

export type Fixtures = {
	page: Page;
	loginPage: LoginPage;
	navbar: NavbarComponent;
	ordersPage: OrdersPage;
};