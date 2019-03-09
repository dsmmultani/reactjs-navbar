import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <br />
        <h3>This application is created using Reactjs</h3>
        <hr />
        <p>
          It is divided into components. The <strong>App.js</strong> is the main
          component. Inside this component we have our Navbar. The Dropdown
          menus are individual components: <strong>ProgrammingDropdown</strong>{" "}
          - which have nested <strong>WebDevDropdown</strong>, and{" "}
          <strong>ProjectsDropdown</strong> component.
        </p>
        <br />
        <p>
          The Navbar hav been styled using CSS. As for the routing of the links,
          it is handled by 'react-router-dom'.
        </p>
      </div>
    );
  }
}

export default Home;
