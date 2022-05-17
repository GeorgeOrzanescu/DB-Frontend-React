import { Link } from "react-router-dom";

const PageNotFound: React.FunctionComponent = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <p>U can find content at :</p>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default PageNotFound;
