import { useState } from "react";
import AddModal from "../Modal/AddModal";

const AddArticleBtn: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    console.log(isModalOpen);
  };

  return (
    <div className="btn">
      {isModalOpen && (
        <AddModal handleCloseModal={handleCloseModal.bind(this)} />
      )}
      <button className="btn-add" id="btn-add" onClick={handleOpenModal}>
        <img src="img/plus.png" alt="plus symbol" />
        ADD ARTICLE
      </button>
    </div>
  );
};

export default AddArticleBtn;
