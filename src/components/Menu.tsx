import AddArticleBtn from "./Buttons/AddArticleBtn";

const Menu: React.FunctionComponent = () => {
  return (
    <header>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/#">TRAVEL UPDATES</a>
          </li>
          <li>
            <a href="/#">REVIEWS</a>
          </li>
          <li>
            <a href="/#">ABOUT</a>
          </li>
          <li>
            <a href="/#">CONTACT</a>
          </li>
        </ul>
      </nav>
      <AddArticleBtn />
    </header>
  );
};

export default Menu;
