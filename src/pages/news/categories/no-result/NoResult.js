import React from "react";
import { getIconPath } from "@utils/navigation.service";

import Button from "@components/ui/button/Button";

import { ReactSVG } from "react-svg";

import "@pages/news/categories/no-result/NoResult.scss";

const NoResult = ({ category }) => {
  return (
    <div className="no-results-container">
      <ReactSVG src={getIconPath("computer-dead")} className="error-icon" />
      <div className="error-message">
        No news available in {category} category yet.
      </div>

      <p className="error-info">
        We couldn't find the news you're looking for, but don't worry! <br />{" "}
        Try browsing a different category or visit our homepage for the latest
        news.
      </p>

      <Button
        label="Discover the Latest News"
        icon={getIconPath("news")}
        className="large blue"
        onClick={() => navigate("/all-news")}
      />
    </div>
  );
};

export default NoResult;
