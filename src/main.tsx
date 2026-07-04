import { createRoot } from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router";
import { routerConfig } from "@/utils/RouterProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./utils/libs/queryClient";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routerConfig} />
  </QueryClientProvider>,
);
