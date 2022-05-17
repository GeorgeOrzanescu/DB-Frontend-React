import { BlogArticle } from "../../models/Blog.model";
import ReadMoreBtn from "../Buttons/ReadMoreBtn";

interface ArticleProps {
  article: BlogArticle;
  key: number;
}

const Article: React.FunctionComponent<ArticleProps> = (props) => {
  return (
    <article>
      <h1>{props.article.title}</h1>
      <div className="article-info">
        <p>{props.article.tag}</p>
        <p className="dot">&#8226;</p>
        <p>
          Added by{" "}
          <span className="article-author">{props.article.author}</span>
        </p>
        <p className="dot">&#8226;</p>
        <p>{props.article.date}</p>
      </div>
      <div className="article-modify">
        <button className="btn-edit">Edit</button>
        <span>&#124;</span>
        <button className="btn-edit">Delete</button>
      </div>
      <div className="article-img">
        <img src={process.env.PUBLIC_URL + "/" + props.article.imgUrl} alt="" />
      </div>
      <div className="article-paragraph">
        <p>{props.article.summary}</p>
      </div>
      <ReadMoreBtn articleId={props.article.id} />
    </article>
  );
};

export default Article;
