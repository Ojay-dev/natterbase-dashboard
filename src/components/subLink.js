import React from "react";
import { Link } from "react-router-dom";

import styles from "./subLink.module.scss";

export default () => {
  return (
    <div className={styles.sublink}>
      <div className={styles.overall}>
        <div>
          <ul>
            <li>
              <Link to="#">Overview</Link>
            </li>
            <li>
              <Link to="#">Teams</Link>
            </li>
            <li>
              <Link to="#">Modules</Link>
            </li>
            <li>
              <Link to="#">Files</Link>
            </li>
            <li>
              <Link to="#">Progress</Link>
            </li>
          </ul>
        </div>

        <div className={styles.toggle_switch + " custom-control custom-switch " + styles.custom_switch}>
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
