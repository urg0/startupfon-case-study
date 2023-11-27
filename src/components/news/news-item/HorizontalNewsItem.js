import React, { useState } from "react";
import { ReactSVG } from "react-svg";

import { getIconPath } from "@utils/navigation.service";

import "@components/news/news-item/NewsItem.scss";
import AuthorCard from "@components/ui/card/AuthorCard";
import NewsContent from "./news-content/NewsContent";

const HorizontalNewsItem = ({
  id,
  title,
  date,
  text,
  image,
  fullName,
  job,
  avatar,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  return (
    <div className="horizontal-news-container">
      <div className="author-wrapper">
        <AuthorCard avatar={avatar} fullName={fullName} job={job} />
        <ReactSVG
          src={getIconPath(`${isBookmarked ? "bookmark2" : "bookmark"}`)}
          className="bookmark-icon"
          onClick={toggleBookmark}
        />
      </div>
      <NewsContent id={id} title={title} text={text} image={image} />
    </div>
  );
};

export default HorizontalNewsItem;
