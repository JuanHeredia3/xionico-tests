import type { Page } from '@playwright/test';

export const NavbarElements = (page: Page) =>
	({
		dashboard: page.getByRole('link', { name: 'Dashboard' }),
		orders: page.getByRole('link', { name: 'Pedidos' }),
		collections: page.getByRole('link', { name: 'Cobranzas' }),
		reports: page.getByRole('link', { name: 'Reportes' }),
	}) as const;