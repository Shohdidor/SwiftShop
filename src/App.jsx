import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import ProductId from "./pages/ProductId/ProductId";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index : true,
          element: <Home />,
        },
        {
          path : "login",
          element: <Login />,
        },
        {
          path: "cart",
          element: <Cart/>,
        },
        {
          path : "product/:id",
          element : <ProductId />
        },
        {
          path : "*",
          element : <NotFound />
        }
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
