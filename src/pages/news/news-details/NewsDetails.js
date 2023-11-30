// IMPORTANT: Weird looking code because of the lack of the perfect api

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@utils/api.service";

import AuthorCard from "@components/ui/card/AuthorCard";
import NewsDetailsActions from "@components/news/news-details/actions/NewsDetailsActions";

import { ReactSVG } from "react-svg";
import AppIcons from "@root/constants/assetManager/AppIcons";

import "@pages/news/news-details/NewsDetails.scss";

const BackIcon = AppIcons.GetIcon("back");

const NewsDetails = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["news", _id],
    queryFn: () =>
      fetchData(
        `https://6563f6baceac41c0761d37f8.mockapi.io/api/dummy-news/new/${_id}`
      ),
    staleTime: 0,
  });

  return (
    <div className="news-details-container">
      <ReactSVG
        src={BackIcon}
        className="back-icon"
        onClick={() => navigate("../")}
      />
      {data && (
        <>
          <div className="title-container">
            <h2 className="news-title">{data.title} </h2>
            <span className="news-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, modi. modi.
            </span>
            <div className="author-info">
              <AuthorCard
                avatar={data.avatar}
                fullName={data.fullName}
                job={data.job}
                date={data.date}
              />
            </div>
            <NewsDetailsActions id={_id} isBookmarked={data.isBookmarked} />
          </div>
          {/* IMPORTANT: Weird looking code because of the lack of the perfect api */}

          <p className="news-text">
            {data.text}
            {data.text}
          </p>
          <img src={data.image} alt="news" className="news-image" />
          <p className="news-text">
            {data.text}
            {data.text}
            {data.text}
            {data.text}
          </p>
          <p className="news-text">{data.text}</p>
          <p className="news-text">
            {data.text}
            {data.text}
          </p>
        </>
      )}
    </div>
  );
};

export default NewsDetails;
