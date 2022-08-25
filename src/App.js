// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState("light");
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
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          
          Mode={Mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <Navbar/>*/}
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route  path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text"
                Mode={Mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

