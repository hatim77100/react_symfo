import React from "react";

// PAGES COMPONENTS
import Home from "../../pages/home";
import Client from "../../pages/client";
import Product from "../../pages/product";

// ADMIN COMPONENTS
import DashBoard from "../../pages/dashboard";
import Users from "../../pages/admin/users";

// PRODUCT ENTITY
import CreateProduct from "../../pages/product/functions/createProduct";
import EditProduct from "../../pages/product/functions/editProduct";
import ShowProduct from "../../pages/product/functions/showProduct";

// CLIENT ENTITY
import CreateClient from "../../pages/client/functions/createClient";
import EditClient from "../../pages/client/functions/editClient";
import ShowClient from "../../pages/client/functions/showClient";

import { createBrowserRouter } from "react-router-dom";
export const Provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/clients",
    element: <Client />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/products/create",
    element: <CreateProduct />,
  },
  {
    path: "/products/edit/:id",
    element: <EditProduct />,
  },
  {
    path: "/products/show/:id",
    element: <ShowProduct />,
  },
  {
    path: "/products",
    element: <Client />,
  },
  {
    path: "/products/create",
    element: <CreateClient />,
  },
  {
    path: "/products/edit/:id",
    element: <EditClient />,
  },
  {
    path: "/products/show/:id",
    element: <ShowClient />,
  },
]);
