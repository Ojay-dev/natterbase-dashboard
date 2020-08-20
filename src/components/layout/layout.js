import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
// import styles from "./layout.module.scss";


export default ({ children }) => {
  return (
    <div>
      <Sidebar/>
      <Header/>
      {children}
    </div>
  );
};
