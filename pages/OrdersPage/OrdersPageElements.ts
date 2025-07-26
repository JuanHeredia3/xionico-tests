import type { Page } from '@playwright/test';

export const ordersElements = (page: Page) =>
	({
		table: page.getByRole('table'),
		tableElements: {
			customer: page.getByRole('columnheader', { name: 'Cliente' }),
			businessName: page.getByRole('columnheader', { name: 'Razón Social' }),
			orderNumber: page.getByRole('columnheader', { name: 'N° Pedido' }),
			salespersonId: page.getByRole('columnheader', { name: 'ID Vendedor' }),
			order: page.getByRole('columnheader', { name: 'Pedido', exact: true }),
			delivery: page.getByRole('columnheader', { name: 'Entrega' }),
			export: page.getByRole('columnheader', { name: 'Exportación' }),
			totalAmount: page.getByRole('columnheader', { name: 'Monto total' }),
		},
	}) as const;