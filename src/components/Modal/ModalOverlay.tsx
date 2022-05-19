import { useState } from "react";
import { AddedArticle, BlogArticle } from "../../models/Blog.model";

type ModalOverlayProps = {
  handleCloseModal: () => void;
  reRend: () => void;
  articleToEdit?: BlogArticle;
};

const ModalOverlay: React.FunctionComponent<ModalOverlayProps> = (props) => {
  const [article, setArticle] = useState<AddedArticle>({
    title: props.articleToEdit ? props.articleToEdit.title : "",
    tag: props.articleToEdit ? props.articleToEdit.tag : "",
    author: props.articleToEdit ? props.articleToEdit.author : "",
    date: props.articleToEdit ? props.articleToEdit.date : "",
    imgUrl: props.articleToEdit ? props.articleToEdit.imgUrl : "",
    content: props.articleToEdit ? props.articleToEdit.content : "",
  });

  const saveArticle = async () => {
    if (props.articleToEdit) {
      props.articleToEdit.id > 0
        ? await fetch(
            //"https://my-json-server.typicode.com/GeorgeOrzanescu/demo/articles",
            "http://localhost:4000/articles/" + props.articleToEdit.id,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(article),
            }
          )
        : await fetch(
            //"https://my-json-server.typicode.com/GeorgeOrzanescu/demo/articles",
            "http://localhost:4000/articles",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(article),
            }
          );
      props.handleCloseModal();
      props.reRend();
    }
  };
  return (
    <div id="modal" className="no-display">
      <div className="modal-content">
        <div className="modal-header">
          <h1>Add/Edit article</h1>
        </div>
        <div className="modal-body">
          <form action="">
            <div className="form-group">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Please enter title"
                defaultValue={
                  props.articleToEdit ? props.articleToEdit.title : ""
                }
                onChange={(e) =>
                  setArticle({ ...article, title: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="tag"
                id="tag"
                placeholder="Please enter tag"
                defaultValue={
                  props.articleToEdit ? props.articleToEdit.tag : ""
                }
                onChange={(e) =>
                  setArticle({ ...article, tag: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Please enter author"
                defaultValue={
                  props.articleToEdit ? props.articleToEdit.author : ""
                }
                onChange={(e) =>
                  setArticle({ ...article, author: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                name="date"
                id="date"
                placeholder="Please enter date"
                defaultValue={
                  props.articleToEdit ? props.articleToEdit.date : ""
                }
                onChange={(e) =>
                  setArticle({ ...article, date: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Please enter image url"
                defaultValue={
                  props.articleToEdit ? props.articleToEdit.imgUrl : ""
                }
                onChange={(e) =>
                  setArticle({ ...article, imgUrl: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <textarea
                name="content"
                id="content"
                placeholder="Please enter content"
                cols={100}
                defaultValue={
                  props.articleToEdit ? props.articleToEdit.content : ""
                }
                onChange={(e) =>
                  setArticle({ ...article, content: e.target.value })
                }
              ></textarea>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn-modal" onClick={props.handleCloseModal}>
            CANCEL
          </button>
          <button className="btn-modal save" onClick={saveArticle}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
