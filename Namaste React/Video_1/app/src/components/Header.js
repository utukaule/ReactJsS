const Header = ({img}) => {
    return (
      <>
        <div className="header">
          <img src={img} className="logo" />
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Cart</li>
            </ul>
          </div>
        </div>
      </>
    );
  };

  export default Header