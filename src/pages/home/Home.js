import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchNews } from "@utils/api.service";

import { DarkModeContext } from "@root/context/DarkModeContext";

import Title from "@components/ui/title/Title";

import "@pages/home/Home.scss";
import NewsItem from "@components/news/news-item/NewsItem";

const Home = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const {
    data: allNews,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["news"], //IMPORTANT:for caching
    queryFn: fetchNews, //you need to write your own fetch function, react query does not comes with built in one.
    staleTime: 0,
    // gcTime: 1000 , for the clear cache
  });

  const topNews = allNews?.slice(0, 4);

  return (
    <div
      className={darkMode ? "home-page-container" : "home-page-container light"}
    >
      <Title title="Latest News" />
      {isPending && <div>Loading...</div>}
      {isError && <div>error</div>}
      {/* <div className="news-list">
        {topNews &&
          topNews.map(
            ({ id, title, date, text, image, fullName, job, avatar }) => (
              <NewsItem
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
          )}
      </div> */}
    </div>
  );
};

export default Home;
