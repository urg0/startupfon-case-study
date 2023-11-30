import { useRoutes } from "react-router-dom";

import LandingPage from "@pages/landing-page/LandingPage";
import RootPage from "@pages/root/RootPage";
import Home from "@pages/home/Home";
import AllNews from "@pages/news/all-news/AllNews";
import NewsDetails from "@pages/news/news-details/NewsDetails";
import Bookmarks from "@pages/bookmarks/Bookmarks";
import Sports from "@pages/news/categories/sports/Sports";
import Finance from "@pages/news/categories/finance/Finance";
import Travel from "@pages/news/categories/travel/Travel";
import Culture from "@pages/news/categories/culture/Culture";
import Weather from "@pages/news/categories/weather/Weather";

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
        {
          path: "/news/sports",
          element: <Sports />,
        },
        {
          path: "/news/finance",
          element: <Finance />,
        },
        {
          path: "/news/travel",
          element: <Travel />,
        },
        {
          path: "/news/culture",
          element: <Culture />,
        },
        {
          path: "/weather-forecast",
          element: <Weather />,
        },
        {
          path: "/bookmarks",
          element: <Bookmarks />,
        },
      ],
    },
  ]);

  return elements;
};
