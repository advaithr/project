import React from "react";

import Title from "./Header/Title";
import NavBar from "./Header/NavBar.js";


export default class Header extends React.Component {
  

  render() {
    return (
      <div>
        <Title title="IMG" />
        <NavBar / >
      </div>
    );
  }
}
