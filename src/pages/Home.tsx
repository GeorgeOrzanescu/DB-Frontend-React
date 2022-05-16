import Menu from "../components/Menu";
import Article from "../components/Article";
import React, { useEffect, useState } from "react";
import { BlogArticle } from "../models/Blog.model";
import Footer from "../components/Footer";

const Home: React.FunctionComponent = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/articles");
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
