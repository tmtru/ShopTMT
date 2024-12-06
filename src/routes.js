import { createBrowserRouter } from "react-router-dom";
import App from './App';
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import ProductDetails from "./pages/ProductDetailPage/ProductDetails";

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
            },
            {
                path: "/kids",
                element: <ProductListPage categoryType={"KIDS"} />,
            },
            {
                path: "/product/:productID",
                element: <ProductDetails  />,
            }
        ]
    }
]);
