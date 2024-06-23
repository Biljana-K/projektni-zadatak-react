import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ProductsRoot from "./pages/ProductsRoot";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";
import EditProductPage from "./pages/EditProduct";
import AddProductPage from "./pages/AddProduct";
import ErrorPage from "./pages/Error";
import LoginPage from "./pages/Login";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {
    path: "products",
    element: <ProductsRoot />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetailsPage />,
      },
      { path: "product/edit/:id", element: <EditProductPage /> },
      { path: "product/add", element: <AddProductPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
