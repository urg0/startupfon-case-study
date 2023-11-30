import React from "react";

import Title from "@components/ui/title/Title";
import NoResult from "@pages/news/categories/no-result/NoResult";

import "@pages/news/categories/culture/Culture.scss";

const Culture = () => {
  return (
    <div className="culture-news-container">
      <Title title="Culture" />
      <NoResult category="culture" />
    </div>
  );
};

export default Culture;
