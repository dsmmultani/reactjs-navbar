import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>ReactJs Navbar</h1>
    </header>
  );
}

const headerStyle = {
  padding: 30,
  background: "#343a40",
  color: "#f8f8f2",
  textAlign: "left",
  fontSize: 20,
  fontFamily: ("Trebuchet MS",
  "Lucida Sans Unicode",
  "Lucida Grande",
  "Lucida Sans",
  "Arial",
  "sans-serif")
};

export default Header;
