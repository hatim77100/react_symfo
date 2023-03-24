import React from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "./provider";

const Router = () => {
  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<RouterProvider router={Provider} />);
};

export default Router;
