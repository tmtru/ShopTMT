import { createBrowserRouter } from "react-router-dom";
import App from './App';
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <ShopApplicationWrapper />,
        children: [
            {
                path: "/",
                element: <App/>,
            },
            {
                path: "/womens",
                element: <ProductListPage categoryType={"WOMEN"} />,
            },
            {
                path: "/mens",
                element: <ProductListPage categoryType={"MEN"} />,
            }
        ]
    }
]);
