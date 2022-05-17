import { IpageFooterProps } from "../models/Blog.model";

const Footer: React.FunctionComponent<IpageFooterProps> = (props) => {
  return (
    <footer className="footer">
      <button className="footer__link" onClick={props.clickPrev}>
        previous
      </button>
      <button
        className="footer__link footer__link--next"
        onClick={props.clickNext}
      >
        next
      </button>
    </footer>
  );
};

export default Footer;
