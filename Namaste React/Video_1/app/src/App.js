import img from "./assets/Finallogo.png";
import Body from "./components/Body.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

function App() {
  return (
    <>
      <Router>
        <Header img={img} />
        <Routes>
          <Route path="/" element={<Body />} errorElement={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

export default App;