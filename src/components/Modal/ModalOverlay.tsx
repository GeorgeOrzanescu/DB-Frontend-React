type ModalOverlayProps = {
  handleCloseModal: () => void;
};

const ModalOverlay: React.FunctionComponent<ModalOverlayProps> = (props) => {
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
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="tag"
                id="tag"
                placeholder="Please enter tag"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="author"
                id="author"
                placeholder="Please enter author"
              />
            </div>
            <div className="form-group">
              <input name="date" id="date" placeholder="Please enter date" />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Please enter image url"
              />
            </div>
            <div className="form-group">
              <textarea
                name="content"
                id="content"
                placeholder="Please enter content"
                cols={100}
              ></textarea>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn-modal" onClick={props.handleCloseModal}>
            CANCEL
          </button>
          <button className="btn-modal save">SAVE</button>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
