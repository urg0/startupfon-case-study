import React from "react";

import { useQuery } from "@tanstack/react-query";
import { eventsUrl, fetchData } from "@utils/api.service";

import Title from "@components/ui/title/Title";
import HorizontalNewsItem from "@components/news/news-item/HorizontalNewsItem";
import NoBookmarksMessage from "./no-bookmarks-message/NoBookmarksMessage";

import "@pages/bookmarks/Bookmarks.scss";

const Bookmarks = () => {
  const { data: allNews } = useQuery({
    queryKey: ["news"],
    queryFn: () => fetchData(eventsUrl),
  });

  const bookmarkedNews = allNews?.filter(
    (newItem) => newItem.isBookmarked === true
  );

  console.log(bookmarkedNews);

  return (
    <div className="bookmarks-container">
      <Title title="Bookmarked News" />
      <div className="news-list">
        {bookmarkedNews &&
          bookmarkedNews.map((newsItem) => (
            <HorizontalNewsItem key={newsItem.id} newsItem={newsItem} />
          ))}
        {bookmarkedNews?.length === 0 && <NoBookmarksMessage />}
      </div>
    </div>
  );
};

export default Bookmarks;
