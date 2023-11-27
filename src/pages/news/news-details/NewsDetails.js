import React, { useEffect } from "react";

import "@pages/news/news-details/NewsDetails.scss";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const NewsDetails = () => {
  const { _id } = useParams();

  /*   const {
    data: allNews,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["news"], 
    queryFn: fetchNews, 
    staleTime: 0,
    
  }); */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://6563f6baceac41c0761d37f8.mockapi.io/api/dummy-news/new/${_id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      NewsDetails
      {_id}
    </div>
  );
};

export default NewsDetails;
