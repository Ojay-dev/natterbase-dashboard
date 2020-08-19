import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./sidebar";
import styles from "./layout.module.scss";


export default ({ children }) => {
  return (
    <div>
      <Sidebar></Sidebar>
    </div>
  );
};
