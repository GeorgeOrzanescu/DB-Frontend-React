import Menu from "../components/Menu";
import Article from "../components/Article/Article";
import React, { useEffect, useState } from "react";
import { BlogArticle } from "../models/Blog.model";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

type Pagination = {
  toDisplay: number;
  startIndex: number;
  endIndex: number;
};

const Home: React.FunctionComponent = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState<Pagination>({
    toDisplay: 3,
    startIndex: 0,
    endIndex: 3,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/GeorgeOrzanescu/demo/articles"
      );
      const json = await response.json();
      setArticles(json);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const goToPrevPage = () => {
    const { startIndex, endIndex, toDisplay } = pagination;

    setPagination({
      startIndex: startIndex - toDisplay,
      endIndex: endIndex - toDisplay - 1,
      toDisplay: toDisplay,
    });
  };

  const goToNextPage = () => {
    const { startIndex, endIndex, toDisplay } = pagination;
    setPagination({
      startIndex: startIndex + toDisplay,
      endIndex: endIndex + toDisplay + 1,
      toDisplay: toDisplay,
    });
  };

  return (
    <React.Fragment>
      <Menu />
      {!isLoading ? (
        articles
          .slice(pagination.startIndex, pagination.endIndex)
          .map((blogArticle) => (
            <Article key={blogArticle.id} article={blogArticle} />
          ))
      ) : (
        <Loading />
      )}
      <Footer clickPrev={goToPrevPage} clickNext={goToNextPage} />
    </React.Fragment>
  );
};

export default Home;
