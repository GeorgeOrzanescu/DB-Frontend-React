import Menu from "../components/Menu";
import Article from "../components/Article/Article";
import React, { useEffect, useState } from "react";
import { BlogArticle } from "../models/Blog.model";
import Footer from "../components/Footer";

const Home: React.FunctionComponent = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/GeorgeOrzanescu/demo/articles"
      );
      const json = await response.json();
      setArticles(json);
      console.log(json);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Menu />
      {articles.map((blogArticle) => (
        <Article key={blogArticle.id} article={blogArticle} />
      ))}
      <Footer />
    </React.Fragment>
  );
};

export default Home;
