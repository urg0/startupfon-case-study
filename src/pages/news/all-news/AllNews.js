import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { fetchNews } from "@utils/api.service";
import { ReactSVG } from "react-svg";

import Title from "@components/ui/title/Title";
import HorizontalNewsItem from "@components/news/news-item/HorizontalNewsItem";

import AppIcons from "@root/constants/assetManager/AppIcons";

import "@pages/news/all-news/AllNews.scss";

const SearchIcon = AppIcons.GetIcon("search");

const AllNews = () => {
  const { data: allNews } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  });

  const [searchInput, setSearchInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchInputChangeHandler = (event) => {
    setSearchInput(event.target.value);
    setSearchParams({ search: event.target.value });
  };

  const filteredNews = allNews?.filter((newsItem) => {
    //OPTIMIZE: What about upper case?
    return (
      newsItem.title.toLowerCase().includes(searchInput) ||
      newsItem.text.toLowerCase().includes(searchInput) ||
      newsItem.fullName.toLowerCase().includes(searchInput)
    );
  });

  return (
    <div className="all-news-container">
      <Title title="All News" />
      <div className="search-input-container">
        <input
          type="text"
          className="news-search-input"
          placeholder="Search"
          onChange={searchInputChangeHandler}
        />
        <ReactSVG src={SearchIcon} className="search-icon" />
      </div>
      <div className="news-list">
        {
          //NOTE: Do not need to check, filteredNews checks if null or undefined
          /* filteredNews && */
          filteredNews.map(
            ({ id, title, date, text, image, fullName, job, avatar }) => (
              <HorizontalNewsItem
                key={id}
                id={id}
                title={title}
                date={date}
                text={text}
                image={image}
                fullName={fullName}
                job={job}
                avatar={avatar}
              />
            )
          )
        }
      </div>
    </div>
  );
};

export default AllNews;
