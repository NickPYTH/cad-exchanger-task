import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {ContactUsPage} from "pages/ContactUsPage";

export enum AppRoutes {
    MAIN = 'main',
    CONTACT_US_FORM = 'contact_us',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CONTACT_US_FORM]: '/contact_us',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.CONTACT_US_FORM]: {
        path: RoutePath.contact_us,
        element: <ContactUsPage/>
    },
}
