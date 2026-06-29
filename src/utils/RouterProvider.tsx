import Dashboard from "@/dashboard";
import Layout from "@/layout";
import { createBrowserRouter } from "react-router";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Dashboard /> }, {}],
  },
]);
