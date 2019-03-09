import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Csharp from "./components/pages/Csharp";
import ASPnet from "./components/pages/ASPnet";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="navBar">
            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="#">Programming</NavLink>
                  <ProgrammingDropdown />
                </li>
                <li>
                  <NavLink to="#">Projects</NavLink>
                  <ProjectsDropdown />
                </li>

                <li>
                  <NavLink to="/About">About</NavLink>
                </li>
                <li>
                  <NavLink to="/Contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="contentContainer">
            <Route exact path="/" component={Home} />
            <Route path="/programming/csharp" component={Csharp} />
            <Route path="/programming/aspnet" component={ASPnet} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
          <footer>Dharampreet &copy; 2019</footer>
        </div>
      </Router>
    );
  }
}

class ProgrammingDropdown extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/Programming/Csharp">C#</NavLink>
        </li>
        <li>
          <NavLink to="/Programming/ASPnet">ASP.Net</NavLink>
        </li>
        <li>
          <NavLink to="#">
            Web Dev
            <span>
              <i className="arrow right" />
            </span>
          </NavLink>

          <WebDevDropdown />
        </li>
      </ul>
    );
  }
}

class WebDevDropdown extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="#">HTML</NavLink>
        </li>
        <li>
          <NavLink to="#">CSS</NavLink>
        </li>
        <li>
          <NavLink to="#">JavaScript</NavLink>
        </li>
      </ul>
    );
  }
}

class ProjectsDropdown extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="#">Node.js</NavLink>
        </li>
        <li>
          <NavLink to="#">Math Game</NavLink>
        </li>
        <li>
          <NavLink to="#">Lego Sorter</NavLink>
        </li>
        <li>
          <NavLink to="#">Isolette</NavLink>
        </li>
      </ul>
    );
  }
}
export default App;
