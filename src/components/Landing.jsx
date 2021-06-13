import React, { useEffect, useState } from "react";
import Header from "./Header";
import NewsCard from "./NewsCard";
import Loading from "./Loading";
import FadeIn from "react-fade-in/lib/FadeIn";
const Landing = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=8768d2eac5b043059c5e1b375b71d2c5"
      );
      const data = await res.json();

      setNews(data.articles);
      setIsLoading(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <FadeIn>
          <div className="landing">
            <Header login></Header>
            <div className="landing__news">
              {news?.map((item) => {
                return <NewsCard {...item} key={item.publishedAt}></NewsCard>;
              })}
              {/* <div className="scroll"> Scroll Right for more news </div> */}
            </div>

            {/* chart */}
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Landing;
