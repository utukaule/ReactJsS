import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";
import Support from "./components/Support";
import Contact from "./components/Contact";
import Home from "./components/Home";
const App = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/support">Support</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Main />}>
          <Route index  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
