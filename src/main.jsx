import { createRoot } from "react-dom/client";
import { Router } from "./Router/Router.jsx";
import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


createRoot(document.getElementById("root")).render(
    <RouterProvider router={Router} />
);
