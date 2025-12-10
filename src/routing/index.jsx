import { createBrowserRouter } from "react-router"
import Home from "../pages/HomePage"
import AddProduct from "../pages/AddProduct"
import UpdateProduct from "../pages/UpdateProduct"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
  {
    path: "/product/:id",
    element: <UpdateProduct />,
  },
])
