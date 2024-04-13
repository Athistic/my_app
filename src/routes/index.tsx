import { createBrowserRouter } from "react-router-dom";
import Profile from "../components/pages/profile";
import Home from "../components/pages/home";
import { NavbarWrapper } from "../components/organisms/navbar";
import Cart from "../components/pages/cart";
import PageNotFound from "../components/pages/page-not-found";
import Items from "../components/pages/items";
import Item from "../components/pages/item";

const routes = createBrowserRouter([
  {
    errorElement: <PageNotFound />,
    element: <NavbarWrapper />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/items",
        element: <Items />,
        children: [
          {
            path: "/items/:itemId",
            element: <Item />,
          },
        ],
      },
    ],
  },
]);
export default routes;
