import React from "react";

import Title from "@components/ui/title/Title";

import AppImages from "@root/constants/assetManager/AppImages";
import "@pages/news/categories/weather/Weather.scss";

const WorkingCat = AppImages.GetImage("working-cat");

const Weather = () => {
  return (
    <div className="weather-forecast-container">
      <Title title="Weather Forecast" />
      <img src={WorkingCat} alt="working-cat" className="gif" />
      <h2 className="coming-soon">Coming soon, working on it!!!</h2>
    </div>
  );
};

export default Weather;
