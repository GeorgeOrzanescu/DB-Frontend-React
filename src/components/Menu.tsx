const Menu: React.FunctionComponent = () => {
  return (
    <nav className="nav">
      <ul className="nav__container">
        <li className="nav__item">
          <a href="/home" className="nav__link">
            Travel updates
          </a>
        </li>
        <li className="nav__item">
          <a href="/home" className="nav__link">
            Reviews
          </a>
        </li>
        <li className="nav__item">
          <a href="/home" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/home" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
