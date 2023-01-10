import "./App.css";
import "./reset.css";

import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Modal from "react-modal";
Modal.setAppElement("#root");

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Projects from "./pages/Projects";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "-10px",
      right: "-10px",
      left: "auto",
      bottom: "-10px",
      display: "flex",
      alingItems: "center",
      justifyContent: "end",
      background: "#18181B",
      overflow: "hidden"
    },
  };

  return (
    <>
      <div className="centralize-header">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="centralize">
        <Modal isOpen={isOpen} style={customStyles} closeTimeoutMS={500}>
          <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </Modal>
        <Home />
        <About />
        <Education />
        <Projects />
      </div>
    </>
  );
}

export default App;
