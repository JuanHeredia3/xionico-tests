import { BasePage } from "../BasePAge/BasePage";
import { ordersElements } from "./OrdersPageElements";

export class OrdersPage extends BasePage {
	readonly ordersElements = ordersElements(this.page);
}