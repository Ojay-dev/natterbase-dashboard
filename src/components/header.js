import React from "react";
import styles from "header.module.scss";

import MenuIcon from "../icons/menu.svg"
import FCMB_Logo from "../icons/FCMB_logo.svg"

export default () => {
  return <header>
    <div>
      <img src={MenuIcon} alt="menu-icon"/>

      <div><img src={FCMB_Logo} alt=""/></div>
    </div>
  </header>;
};
