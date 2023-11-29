import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import { eventsUrl, fetchData } from "@utils/api.service";
import { ReactSVG } from "react-svg";

import Title from "@components/ui/title/Title";
import HorizontalNewsItem from "@components/news/news-item/HorizontalNewsItem";

import AppIcons from "@root/constants/assetManager/AppIcons";

import "@pages/news/all-news/AllNews.scss";
import SearchNoResult from "@components/news/search-no-result/SearchNoResult";

const SearchIcon = AppIcons.GetIcon("search");

const AllNews = () => {
  const { data: allNews } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchData(eventsUrl),
  });

  const [searchInput, setSearchInput] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const searchInputChangeHandler = (event) => {
    setSearchInput(event.target.value);
    setSearchParams({ search: event.target.value });
  };

  const resetSearchInputHandler = () => {
    setSearchInput("");
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
      {/* REFACTOR: Extract actions to a new component. */}
      <div className="news-actions">
        <div className="search-input-container">
          <input
            type="text"
            value={searchInput}
            className="news-search-input"
            placeholder="Search within the latest news..."
            onChange={searchInputChangeHandler}
          />
          <ReactSVG src={SearchIcon} className="search-icon" />
        </div>
        <select className="news-sort-options">
          <option defaultChecked disabled>
            Sort by: default
          </option>
          <option value="alphabet">Alphabet</option>
          <option value="alphabet">Alphabet-reverse</option>
          <option value="alphabet">Newest</option>
          <option value="alphabet">Shortest</option>
        </select>
      </div>
      <div className="news-list">
        {filteredNews &&
          filteredNews.map((newsItem) => (
            <HorizontalNewsItem key={newsItem.id} newsItem={newsItem} />
          ))}
        {filteredNews?.length === 0 && (
          <SearchNoResult resetSearchInput={resetSearchInputHandler} />
        )}
      </div>
    </div>
  );
};

export default AllNews;