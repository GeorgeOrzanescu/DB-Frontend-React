import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleMore from "../components/Article/ArticleMore";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { BlogArticle, IpageFooterProps } from "../models/Blog.model";

const Details: React.FunctionComponent = () => {
  let { articleId } = useParams();
  const [article, setArticle] = useState<BlogArticle>({} as BlogArticle);
  const [content, setContent] = useState<string[]>([]);
  const [pagination, setPagination] = useState(parseInt(articleId as string));

  const navigation: IpageFooterProps = {
    clickPrev: () => {
      if (pagination > 1) {
        setPagination(pagination - 1);
      }
    },
    clickNext: () => {
      if (pagination >= 1) {
        setPagination(pagination + 1);
      }
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://my-json-server.typicode.com/GeorgeOrzanescu/demo/articles/${pagination}`
      );
      if (response.status === 200) {
        const json = await response.json();
        setArticle(json);

        let mid: number;
        if (article.content) {
          let contentArr: string[] = article.content.split(".");
          mid = contentArr.length / 2;

          let firstParagraph: string = contentArr.slice(0, mid).join(".");
          let secondParagraph: string = contentArr.slice(mid).join(".");
          setContent([firstParagraph, secondParagraph]);
        }
      }
    };
    fetchData();
  }, [article.content, pagination]);

  return (
    <div>
      <Menu />
      <ArticleMore
        key={article.id}
        article={article}
        content={content}
      ></ArticleMore>
      <Footer
        clickPrev={navigation.clickPrev}
        clickNext={navigation.clickNext}
      />
    </div>
  );
};

export default Details;
