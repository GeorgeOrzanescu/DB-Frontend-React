import { useState } from "react";
import { BlogArticle } from "../../models/Blog.model";
import AddModal from "../Modal/AddModal";
import Quote from "../Quote";

interface ArticleProps {
  article: BlogArticle;
  key: number;
  content: string[];
}

const ArticleMore: React.FunctionComponent<ArticleProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const ArticleToEdit: BlogArticle = {
    ...props.article,
    title: props.article.title,
    tag: props.article.tag,
    date: props.article.date,
    author: props.article.author,
    imgUrl: props.article.imgUrl,
    content: props.article.content,
  };

  const deleteArticleHandler = async () => {
    await fetch("http://localhost:4000/articles/" + props.article.id, {
      method: "DELETE",
    });
  };

  return (
    <article>
      {isModalOpen && (
        <AddModal
          handleCloseModal={handleCloseModal.bind(this)}
          articleToEdit={ArticleToEdit}
        />
      )}
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
        <button className="btn-edit" onClick={handleOpenModal}>
          Edit
        </button>
        <span>&#124;</span>
        <button className="btn-edit" onClick={deleteArticleHandler}>
          Delete
        </button>
      </div>
      <div className="article-img">
        <img src={process.env.PUBLIC_URL + "/" + props.article.imgUrl} alt="" />
      </div>
      <div className="article-paragraph">
        <p>{props.content[0]}</p>
      </div>
      <Quote saying={props.article.saying} />
      <div className="article-paragraph">
        <p>{props.content[1]}</p>
      </div>
    </article>
  );
};

export default ArticleMore;
