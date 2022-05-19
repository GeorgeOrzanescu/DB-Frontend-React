import React from "react";
import ReactDOM from "react-dom";
import { BlogArticle } from "../../models/Blog.model";
import ModalOverlay from "./ModalOverlay";

type ModalOverlayProps = {
  handleCloseModal: () => void;
  reRend?: () => void;
  articleToEdit?: BlogArticle;
};

const AddModal: React.FunctionComponent<ModalOverlayProps> = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay
          handleCloseModal={props.handleCloseModal}
          reRend={props.reRend ? props.reRend : () => {}}
          articleToEdit={props.articleToEdit}
        />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </React.Fragment>
  );
};

export default AddModal;
