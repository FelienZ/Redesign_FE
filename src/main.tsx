import { createRoot } from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router";
import { routerConfig } from "@/utils/RouterProvider";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={routerConfig} />,
);
