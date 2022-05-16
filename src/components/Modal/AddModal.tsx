import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";

type ModalOverlayProps = {
  handleCloseModal: () => void;
};

const AddModal: React.FunctionComponent<ModalOverlayProps> = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay handleCloseModal={props.handleCloseModal} />,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </React.Fragment>
  );
};

export default AddModal;
