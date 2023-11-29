import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "i18next";
import App from "./App";

import AppImages from "@root/constants/assetManager/AppImages";

const Logo = AppImages.GetImage("logo");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<img src={Logo} alt="logo" />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
