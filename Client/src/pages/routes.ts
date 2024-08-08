import { HomePage } from "@pages/home";
import { NotFoundPage } from "@pages/not-found";

export const Routes = [
	{
		path: "/",
		component: HomePage,
		name: "Home"
	},
	{
		path: "/:pathMatch(.*)*",
		component: NotFoundPage,
		name: "NotFound"
	}
];
