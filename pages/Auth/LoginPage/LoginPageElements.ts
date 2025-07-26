import type { Page } from '@playwright/test';

export const loginElements = (page: Page) =>
	({
		emailInput: page.getByLabel('Email'),
		passwordInput: page.getByLabel('Contraseña'),
		logInButton: page.getByRole('button', { name: 'Iniciar sesión' }),
	}) as const;