import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Support from "./components/Support";
import Contact from "./components/Contact";
import About from "./components/About";
import Labs from "./components/Labs";
import PageNotFound from "./components/PageNotFound";
import Main from "./components/Main";
function App() {
  return (
    <>
      {/* create multiple routes using Routes*/}
      <div className="bg-black text-gray-400 p-4">
        <nav>
          <ul className="">
            <NavLink className="p-4" to="/">
              Home
            </NavLink>
            <NavLink className="p-4" to="/about">
              About
            </NavLink>
            <NavLink className="p-4" to="/support">
              Support
            </NavLink>
            <NavLink className="p-4" to="/contact">
              Contact
            </NavLink>
            <NavLink className="p-4" to="/labs">
              Labs
            </NavLink>
          </ul>
        </nav>
      </div>

      <Routes>
        {/* create single path using Route */}
        <Route path="/" element={<Main />}>
          {/* Default Route */}
          <Route index element={<Home/>} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
