import Menu from "../components/Menu";
import Article from "../components/Article/Article";
import React, { useEffect, useState } from "react";
import { BlogArticle } from "../models/Blog.model";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import AddArticleBtn from "../components/Buttons/AddArticleBtn";

type Pagination = {
  toDisplay: number;
  startIndex: number;
  endIndex: number;
  maxPage: number;
};

const Home: React.FunctionComponent = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState<Pagination>({
    toDisplay: 3,
    startIndex: 0,
    endIndex: 3,
    maxPage: 0,
  });

  const fetchData = async () => {
    const response = await fetch(
      //"https://my-json-server.typicode.com/GeorgeOrzanescu/demo/articles"
      "http://localhost:4000/articles"
    );
    const json = await response.json();
    setArticles(json);
    setIsLoading(false);
    setPagination((prevPagination) => {
      return {
        ...prevPagination,
        maxPage: json.length,
      };
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goToPrevPage = () => {
    const { startIndex, endIndex, toDisplay } = pagination;
    if (startIndex - toDisplay >= 0) {
      setPagination({
        startIndex: startIndex - toDisplay,
        endIndex: endIndex - toDisplay - 1,
        toDisplay: toDisplay,
        maxPage: articles.length,
      });
    }
  };

  const goToNextPage = () => {
    const { startIndex, endIndex, toDisplay } = pagination;
    if (endIndex + 1 <= articles.length) {
      setPagination({
        startIndex: startIndex + toDisplay,
        endIndex: endIndex + toDisplay + 1,
        toDisplay: toDisplay,
        maxPage: articles.length,
      });
    }
  };

  return (
    <React.Fragment>
      <Menu />
      <AddArticleBtn reRend={fetchData.bind(this)} />
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
