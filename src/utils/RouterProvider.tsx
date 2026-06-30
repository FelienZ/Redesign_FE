import Dashboard from "@/pages/dashboard";
import Layout from "@/layout/layout";
import { createBrowserRouter } from "react-router";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Dashboard /> }, {}],
  },
]);
