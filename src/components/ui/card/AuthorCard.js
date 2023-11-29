import React from "react";

import { dateFormatter } from "@utils/utils.service";

import "@components/ui/card/AuthorCard.scss";

const AuthorCard = ({ date, avatar, fullName, job }) => {
  return (
    <div className="author-card-container">
      <div className="author-container">
        <img className="avatar" src={avatar} alt="new" />
        <div className="author">
          <h4 className="full-name">{fullName}</h4>
          <span className="job">{job}</span>
        </div>
      </div>
      <span className="about">
        about
        <u className="category">Finance</u>
      </span>
      <span className="date">•{dateFormatter(date)}</span>
    </div>
  );
};

export default AuthorCard;
