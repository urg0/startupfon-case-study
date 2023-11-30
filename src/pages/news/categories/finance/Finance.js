import React from "react";

import Title from "@components/ui/title/Title";
import NoResult from "@pages/news/categories/no-result/NoResult";

import "@pages/news/categories/finance/Finance.scss";

const Finance = () => {
  return (
    <div className="finance-news-container">
      <Title title="Finance" />
      <NoResult category="finance" />
    </div>
  );
};

export default Finance;
