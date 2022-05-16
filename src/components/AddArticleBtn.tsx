import { useState } from "react";
import AddModal from "./AddModal";

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
    <div className="btn" onClick={handleOpenModal}>
      {isModalOpen && (
        <AddModal
          handleCloseModal={handleCloseModal.bind(this)}
          isModalOpen={isModalOpen}
        />
      )}
      <button className="btn-add" id="btn-add">
        <img src="img/plus.png" alt="plus symbol" />
        ADD ARTICLE
      </button>
    </div>
  );
};

export default AddArticleBtn;
