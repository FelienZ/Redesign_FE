import Dashboard from "@/pages/dashboard";
import SearchPage from "@/pages/search";
import GameDetailPage from "@/pages/game-detail";
import AboutPage from "@/pages/about";
import RatingInfoPage from "@/pages/rating-info";
import ConsultationPage from "@/pages/consult";
import NewsPage from "@/pages/news";
import NewsDetailPage from "@/pages/news-detail";
import UnderDevelopmentPage from "@/pages/under-development";
import Layout from "@/layout/layout";
import { createBrowserRouter } from "react-router";

export const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "search", element: <SearchPage /> },
      { path: "game/:slug", element: <GameDetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "information", element: <RatingInfoPage /> },
      { path: "consult", element: <ConsultationPage /> },
      { path: "news", element: <NewsPage /> },
      { path: "news/:slug", element: <NewsDetailPage /> },
      // Unavailable features redirect to Under Development
      { path: "login", element: <UnderDevelopmentPage /> },
      { path: "register", element: <UnderDevelopmentPage /> },
      { path: "submit-game", element: <UnderDevelopmentPage /> },
      { path: "under-development", element: <UnderDevelopmentPage /> },
    ],
  },
]);
