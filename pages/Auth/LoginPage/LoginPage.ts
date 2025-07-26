import { BasePage } from '../../BasePAge/BasePage';
import { loginElements } from './LoginPageElements';

export class LoginPage extends BasePage {
	readonly loginElements = loginElements(this.page);

	async login(email: string, password: string): Promise<void> {
		await this.page.goto("/");

		await this.loginElements.emailInput.fill(email);
		await this.loginElements.passwordInput.fill(password);
		await this.loginElements.logInButton.click();

		await this.page.waitForURL(process.env.BASE_URL!);
	}
}