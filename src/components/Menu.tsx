const Menu: React.FunctionComponent = () => {
  return (
    // <nav classNameName="nav">
    //   <ul classNameName="nav__container">
    //     <li classNameName="nav__item">
    //       <a href="/home" classNameName="nav__link">
    //         Travel updates
    //       </a>
    //     </li>
    //     <li classNameName="nav__item">
    //       <a href="/home" classNameName="nav__link">
    //         Reviews
    //       </a>
    //     </li>
    //     <li classNameName="nav__item">
    //       <a href="/home" classNameName="nav__link">
    //         About
    //       </a>
    //     </li>
    //     <li classNameName="nav__item">
    //       <a href="/home" classNameName="nav__link">
    //         Contact
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
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
            <a href="/homes">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
