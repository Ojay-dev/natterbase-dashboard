import React from "react";
import { Link } from "react-router-dom";

import styles from "./subLink.module.scss";

const NavLink = ({ name, active }) => {
  return (
    <li>
      <Link to="#" className={active ? styles.active : ""}>
        {name}
      </Link>
    </li>
  );
};

export default () => {
  return (
    <div className={styles.sublink}>
      <div className={styles.overall}>
        <nav>
          <ul>
            <NavLink name="Overview" />
            <NavLink name="Teams" />
            <NavLink name="Modules" active={true} />
            <NavLink name="Files" />
            <NavLink name="Progress" />
          </ul>
        </nav>

        <div
          className={
            styles.toggle_switch +
            " custom-control custom-switch " +
            styles.custom_switch
          }
        >
          <input
            type="checkbox"
            className={"custom-control-input " + styles.custom_control_input}
            id="customSwitch1"
          />
          <label
            className={"custom-control-label " + styles.custom_control_label}
            htmlFor="customSwitch1"
          ></label>
        </div>
      </div>
    </div>
  );
};
