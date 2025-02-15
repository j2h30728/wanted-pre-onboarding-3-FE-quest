import React from "react";
import "./index.css";
import "tailwindcss/tailwind.css";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
