import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import {toast} from 'react-hot-toast'
const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-evenly">
      <Link>
        <img src={logo} width={160} height={32} loading="lazy" alt="" />
      </Link>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* login - signin - logout - dashboard */}

      <div className="flex mr-3 ml-5 gap-3">
        {!isLoggedIn && (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button>SignUp</button>
          </Link>
        )}
        {
        // isLoggedIn(false) means logout 
        isLoggedIn && (
          <Link to="/">
            <button  >Logout</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
