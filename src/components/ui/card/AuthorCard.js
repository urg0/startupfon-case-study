import React from "react";

import "@components/ui/card/AuthorCard.scss";

const AuthorCard = ({ avatar, fullName, job }) => {
  return (
    <div className="author-card-container">
      <div className="author-container">
        <img className="avatar" src={avatar} alt="new" />
        <div className="author">
          <h4 className="full-name">{fullName}</h4>
          <p className="job">{job}</p>
        </div>
      </div>
      <span className="about">
        about
        <u className="category">Finance</u>
      </span>
      <span className="date">•2 April 2023</span>
      {/* <span className="date">{date}</span> */}
    </div>
  );
};

export default AuthorCard;
