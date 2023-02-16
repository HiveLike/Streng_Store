import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";

import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import ProductPage from "../pages/ProductPage";
import FavoritePage from "../pages/FavoritePage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage />,
                index: true
            },
            {
                path: '/user',
                element: <UserPage />
            },
            {
                path: 'product',
                element: <ProductPage />
            },
            {
                path: 'favorite',
                element: <FavoritePage />
            }
        ]
    }
]);

export default router;