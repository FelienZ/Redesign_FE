import Dashboard from "@/pages/dashboard";
import SearchPage from "@/pages/search";
import GameDetailPage from "@/pages/game-detail";
import AboutPage from "@/pages/about";
import RatingInfoPage from "@/pages/rating-info";
import ConsultationPage from "@/pages/consult";
import Layout from "@/layout/layout";
import { createBrowserRouter } from "react-router";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "search", element: <SearchPage /> },
      { path: "game/:id", element: <GameDetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "information", element: <RatingInfoPage /> },
      { path: "consult", element: <ConsultationPage /> },
    ],
  },
]);
