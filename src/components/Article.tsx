import { BlogArticle } from "../models/Blog.model";

interface ArticleProps {
  article: BlogArticle;
  key: number;
}

const Article: React.FunctionComponent<ArticleProps> = (props) => {
  return (
    // <article>
    //   <h2 className="title">{props.article.title}</h2>
    //   <ul className="info__container">
    //     <li className="info__item">{props.article.tag}</li>
    //     <li className="info__item">
    //       Added by
    //       <span className="info__mark">{props.article.author}</span>
    //     </li>
    //     <li className="info__item">{props.article.date}</li>
    //   </ul>
    //   <div className="actions__container">
    //     <button type="button" className="actions__btn">
    //       Edit
    //     </button>
    //     <button type="button" className="actions__btn">
    //       Delete
    //     </button>
    //   </div>

    //   <img src={props.article.imgUrl} alt="Bike" />
    //   <div className="content__container">
    //     <p>{props.article.summary}</p>
    //   </div>
    //   <div className="readmore__container">
    //     <button type="button" className="button">
    //       Read More
    //     </button>
    //   </div>
    // </article>
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
        <img src={props.article.imgUrl} alt="" />
      </div>
      <div className="article-paragraph">
        <p>{props.article.summary}</p>
      </div>
    </article>
  );
};

export default Article;
