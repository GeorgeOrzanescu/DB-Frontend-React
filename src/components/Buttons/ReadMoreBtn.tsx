import { useNavigate } from "react-router-dom";
type propReadMoreBtn = {
  articleId: Number;
};

const ReadMoreBtn: React.FunctionComponent<propReadMoreBtn> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="readmore__container">
      <button
        type="button"
        className="button"
        onClick={() => navigate(`/details/${props.articleId}`)}
      >
        Read More
      </button>
    </div>
  );
};

export default ReadMoreBtn;
