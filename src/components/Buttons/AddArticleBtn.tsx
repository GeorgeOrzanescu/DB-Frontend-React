import { useState } from "react";
import { fetchProp } from "../../models/Blog.model";
import AddModal from "../Modal/AddModal";

const AddArticleBtn: React.FunctionComponent<fetchProp> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="btn">
      {isModalOpen && (
        <AddModal
          handleCloseModal={handleCloseModal.bind(this)}
          reRend={props.reRend}
        />
      )}
      <button className="btn-add" id="btn-add" onClick={handleOpenModal}>
        <img src={process.env.PUBLIC_URL + "/img/plus.png"} alt="plus symbol" />
        ADD ARTICLE
      </button>
    </div>
  );
};

export default AddArticleBtn;
