import { AboutPage } from 'pages/aboutPage'
import { MainPage } from 'pages/mainPage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'aboue'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage/>
	},

	[AppRoutes.ABOUT]: {
		path: RoutePath.aboue,
		element: <AboutPage/>
	}
}