import React, { useState } from "react";
import { ReactSVG } from "react-svg";

import { getIconPath } from "@utils/navigation.service";

import "@components/news/news-item/NewsItem.scss";

const NewsItem = ({ id, title, date, text, image, fullName, job, avatar }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  return (
    <div className="news-container">
      <div className="title-wrapper">
        <h2 className="title">{title}</h2>
        <ReactSVG
          src={getIconPath(`${isBookmarked ? "bookmark2" : "bookmark"}`)}
          className="bookmark-icon"
          onClick={toggleBookmark}
        />
      </div>
      <img className="news-image" src={image} alt="new" />
      {/* <span className="date">{date}</span> */}
      <p className="text">{text}</p>
      <div className="author-container">
        <img className="avatar" src={avatar} alt="new" />
        <div className="author">
          <h4 className="full-name">{fullName}</h4>
          <p className="job">{job}</p>
        </div>
      </div>
      <span className="date">2 April 2023</span>
    </div>
  );
};

export default NewsItem;
