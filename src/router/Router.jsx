import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../page/home-page/Home";
import Error404 from "../components/Error404";
import InstalledApps from "../page/installed-apps/InstalledApps";
import AllApps from "../page/app-page/AllApps";
import AppDetails from "../components/AppDetails";

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
                path: "app-details/:id",
                Component: AppDetails
            },
            {
                path: "installation",
                Component: InstalledApps
            },
            {
                path: '*',
                Component: Error404
            },
        ]
    }
]);

export default router;