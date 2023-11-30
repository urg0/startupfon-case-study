import React from "react";

import Title from "@components/ui/title/Title";
import NoResult from "@pages/news/categories/no-result/NoResult";

import "@pages/news/categories/travel/Travel.scss";

const Travel = () => {
  return (
    <div className="travel-news-container">
      <Title title="Travel" />
      <NoResult category="travel" />
    </div>
  );
};

export default Travel;
