import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import Work from "./pages/work/Work.jsx";
import About from "./pages/about/About.jsx";

const router = createBrowserRouter([
  {
    path: "/francophan2024/",
    element: <App />,
    children: [
      {
        path: "/francophan2024/",
        element: <Home />,
      },
      {
        path: "/francophan2024/About",
        element: <About />,
      },
      {
        path: "/francophan2024/work",
        element: <Work />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
