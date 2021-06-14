import axios from "axios";
import React, { useEffect, useState } from "react";
import "boxicons";
const NewsList = ({}) => {
  const [newsList, setNewsList] = useState([]);
  const [showNews, setShowNews] = useState(false);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://cryptopanic.com/api/v1/posts/?auth_token=8b9b9219c060b948bc19f53bd8991a68132bd07b&kind=news&public=true"
      );
      setNewsList(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="newslist__heading" onClick={() => setShowNews(!showNews)}>
        Trending news
        <box-icon name="trending-up" size="20px" color="#6c6c7c"></box-icon>
      </div>
      {showNews && (
        <div className="newslist">
          {newsList.map((news) => {
            return (
              <div className="newslist__newscard" key={news?.id}>
                <div className="newslist__newscard__desc">
                  <p>{news?.source.title}</p>
                  <h4>{news?.title}</h4>
                  <a href={news?.url} target="_blank">
                    {" "}
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NewsList;
