import { useState } from "react";
import { BlogArticle } from "../../models/Blog.model";
import ReadMoreBtn from "../Buttons/ReadMoreBtn";
import AddModal from "../Modal/AddModal";

interface ArticleProps {
  article: BlogArticle;
  key: number;
  reRend: () => void;
}

const Article: React.FunctionComponent<ArticleProps> = (props) => {
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
    props.reRend();
  };

  return (
    <article>
      {isModalOpen && (
        <AddModal
          handleCloseModal={handleCloseModal.bind(this)}
          reRend={props.reRend}
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
        <p>{props.article.summary}</p>
      </div>
      <ReadMoreBtn articleId={props.article.id} />
    </article>
  );
};

export default Article;
