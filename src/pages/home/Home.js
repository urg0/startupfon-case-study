import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { eventsUrl, fetchData, fetchNews } from "@utils/api.service";

import { DarkModeContext } from "@root/context/DarkModeContext";

import Title from "@components/ui/title/Title";

import "@pages/home/Home.scss";
import NewsItem from "@components/news/news-item/NewsItem";
import SkeletonNew from "@components/ui/skeleton/SkeletonNew";

const Home = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const {
    data: allNews,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["news"], //IMPORTANT:for caching
    queryFn: () => fetchData(eventsUrl), //you need to write your own fetch function, react query does not comes with built in one.
    staleTime: 0,
    // gcTime: 1000 , for the clear cache
  });

  const topNews = allNews?.slice(0, 4);

  return (
    <div
      className={darkMode ? "home-page-container" : "home-page-container light"}
    >
      <Title title="Latest News" />
      <div className="news-list">
        {/*   {topNews &&
          topNews.map(
            (newsItem) => (
              <NewsItem
              key={newsItem.id}
              newsItem={newsItem}
              />
              )
            )} */}
        {isPending &&
          Array.from({ length: 4 }, (_, index) => <SkeletonNew key={index} />)}
        {isError && <div>error</div>}
      </div>
    </div>
  );
};

export default Home;
