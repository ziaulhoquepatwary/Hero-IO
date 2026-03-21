import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../page/home-page/Home";
import Error404 from "../components/Error404";
import InstalledApps from "../page/installed-apps/InstalledApps";
import AllApps from "../page/app-page/AllApps";
import AppDetails from "../components/AppDetails";
import apps from '../data/apps.json';
import AppNotFound from "../components/AppNotFound";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "apps",
                Component: AllApps
            },
            {
                path: "apps/:id",
                element: <AppDetails />,
                loader: ({ params }) => {
                    const singleApp = apps.find(app => app.id == params.id);
                    return singleApp;
                }
            },
            {
                path: "installation",
                Component: InstalledApps
            },
            {
                path: "app-not-found",
                Component: AppNotFound
            },
            {
                path: '*',
                Component: Error404
            },
        ]
    }
]);

export default router;