import React from "react";

import Title from "@components/ui/title/Title";
import NoResult from "@pages/news/categories/no-result/NoResult";

import "@pages/news/categories/sports/Sports.scss";

const Sports = () => {
  return (
    <div className="sport-page-container">
      <Title title="Sports" />
      <NoResult category="sports" />
    </div>
  );
};

export default Sports;
