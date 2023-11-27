import { useRoutes } from "react-router-dom";

import Home from "@pages/home/Home";
import LandingPage from "@pages/landing-page/LandingPage";
import RootPage from "@pages/root/RootPage";

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
      ],
    },
  ]);

  return elements;
};
