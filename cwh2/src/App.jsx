import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  //  Controling dark mode...
  const [mode, setMode] = useState("dark");

  // Alert msg...
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode activated", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to modify"
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
