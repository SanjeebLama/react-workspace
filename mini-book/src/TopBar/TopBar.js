import logo from "../logo.svg";

import React from "react";
import classes from "./TopBar.module.css";

function TopBar(props) {
  return (
    <header>
      <nav className={classes.TopBar}>
        <img src={logo} alt="LOGO Here" />
      </nav>
    </header>
  );
}

export default TopBar;
