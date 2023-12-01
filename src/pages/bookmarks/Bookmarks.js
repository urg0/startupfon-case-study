import React from "react";

import { useQuery } from "@tanstack/react-query";
import { eventsUrl, fetchData } from "@utils/api.service";

import Title from "@components/ui/title/Title";
import HorizontalNewsItem from "@components/news/news-item/HorizontalNewsItem";
import NoBookmarksMessage from "./no-bookmarks-message/NoBookmarksMessage";
import SkeletonNew from "@components/ui/skeleton/SkeletonNew";
import ErrorMessage from "@components/ui/error/ErrorMessage";

import "@pages/bookmarks/Bookmarks.scss";

const Bookmarks = () => {
  const {
    data: allNews,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["bookmarkedNews"],
    queryFn: () => fetchData(eventsUrl),
  });

  const bookmarkedNews = allNews?.filter(
    (newItem) => newItem.isBookmarked === true
  );

  return (
    <div className="bookmarks-container">
      <Title title="Bookmarked News" />
      <div className="news-list">
        {bookmarkedNews &&
          bookmarkedNews.map((newsItem) => (
            <HorizontalNewsItem key={newsItem.id} newsItem={newsItem} />
          ))}
        {bookmarkedNews?.length === 0 && <NoBookmarksMessage />}
        {isPending &&
          Array.from({ length: 4 }, (_, index) => <SkeletonNew key={index} />)}
        {isError && <ErrorMessage refreshButton={true} />}
      </div>
    </div>
  );
};

export default Bookmarks;
