import { useRoutes } from "react-router-dom";

import LandingPage from "@pages/landing-page/LandingPage";
import RootPage from "@pages/root/RootPage";
import Home from "@pages/home/Home";
import AllNews from "@pages/news/all-news/AllNews";
import NewsDetails from "@pages/news/news-details/NewsDetails";

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/all-news",
          children: [
            {
              path: "",
              element: <AllNews />,
            },
            {
              path: ":_id",
              element: <NewsDetails />,
            },
          ],
        },
      ],
    },
  ]);

  return elements;
};
