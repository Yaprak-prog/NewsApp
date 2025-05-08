import React, { useEffect, useState } from "react";
import axios from "axios";
import NavItem from "./NavItem";

let apiKey = "07c7aca3938242499b4b85bb9d2abe87";

function NavBoard({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
    console.log(articles);
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {articles.map((news, index) => {
        return (
          <NavItem
            key={index}
            title={news.title}
            description={news.description}
            url={news.url}
            image={news.urlToImage}
          />
        );
      })}
    </div>
  );
}

export default NavBoard;
