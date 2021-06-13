import React, { useEffect } from "react";

const NewsCard = ({ title, url, urlToImage }) => {
  return (
    <div className="newscard">
      <div className="newscard__img">
        <img src={urlToImage} alt="" />
      </div>
      <div className="newscard__desc">
        <p>{title}</p>
        <a href={url} target="_blank">
          {" "}
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
