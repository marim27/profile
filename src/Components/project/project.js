import React from "react";
import "./project.css";
import Bannar from "../Bannar/bannar";
import About from "../About/about";
import Skills from "../Skills/skills";
import Portfolio from "../Portfolio/Portfolio";

class Project extends React.Component {
  render() {
    return (
      <div className="container bg-secondary bg-opacity-25">
        <Bannar />
        <About />
        <Skills />
        <Portfolio />
      </div>
    );
  }
}

export default Project;
