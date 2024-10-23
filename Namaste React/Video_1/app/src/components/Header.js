import { useState } from "react";
import {Link} from 'react-router-dom'
const Header = ({ img }) => {
  // let btnName = "Login"
  const [btnName, setName] = useState("Login");
  
  return (
    <>
      <div className="header">
        <img src={img} className="logo" />
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
           
            <button
              className="login"
              onClick={() => {
                btnName === "Login" ? setName("Logout") : setName("Login");
                // setName(prevName => (prevName === "Login" ? "Logout" : "Login"));
                // console.log("header called")
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
