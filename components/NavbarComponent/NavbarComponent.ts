import { BasePage } from "../../pages/BasePAge/BasePage";
import { NavbarElements } from "./NavbarComponentElements";

export class NavbarComponent extends BasePage {
	readonly loginElements = NavbarElements(this.page);

	async navigateTo(section: 'dashboard' | 'orders' | 'collections' | 'reports'): Promise<void> {
		switch (section) {
			case 'dashboard':
				await this.loginElements.dashboard.click();
				break;
			case 'orders':
				await this.loginElements.orders.click();
				break;
			case 'collections':
				await this.loginElements.collections.click();
				break;
			case 'reports':
				await this.loginElements.reports.click();
				break;
		}
	}
}