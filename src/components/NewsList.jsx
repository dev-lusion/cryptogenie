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
    // <a
    //   href="https://cryptopanic.com/"
    //   target="_blank"
    //   data-news_feed="trending"
    //   data-posts_limit="10"
    //   data-bg_color="#0D1117"
    //   data-text_color="#6C6C7C"
    //   data-link_color="#2A95FF"
    //   data-header_bg_color="#0D1117"
    //   data-header_text_color="#FFFFFF"
    //   className="CryptoPanicWidget"
    // >
    //   Trending News
    // </a>

    <iframe
      width="100%"
      scrolling="yes"
      allowtransparency="true"
      frameborder="0"
      src="https://cryptopanic.com/widgets/news/?bg_color=0D1117&amp;font_family=mono&amp;header_bg_color=0D1117&amp;header_text_color=FFFFFF&amp;link_color=2A95FF&amp;news_feed=trending&amp;posts_limit=5&amp;text_color=6C6C7C&amp;title=Trending%20News"
      height="350px"
    ></iframe>
  );
};

export default NewsList;
