import AddArticleBtn from "./Buttons/AddArticleBtn";

const Menu: React.FunctionComponent = () => {
  return (
    <header>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/home">TRAVEL UPDATES</a>
          </li>
          <li>
            <a href="/home">REVIEWS</a>
          </li>
          <li>
            <a href="/home">ABOUT</a>
          </li>
          <li>
            <a href="/home">CONTACT</a>
          </li>
        </ul>
      </nav>
      <AddArticleBtn />
    </header>
  );
};

export default Menu;
