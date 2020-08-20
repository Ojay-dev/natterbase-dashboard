import React from "react";
import { Link } from "react-router-dom";

import styles from "./subLink.module.scss";
import clock from "../../icons/clock_green.svg";

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
          className="d-flex justify-content-between align-items-center"
          style={{ width: "40%" , paddingBottom: 11 }}
        >
          <div className={"d-flex align-items-center " + styles.toggle}>
            <span className="mr-3">All Task</span>
            <input type="checkbox" id="switch" />
            <label for="switch">Toggle</label>
            <span className="ml-3">All Modules</span>
          </div>

          <div
            className={"d-flex align-items-center " + styles.project_duration}
          >
            <img src={clock} alt="clock icon" />
            <div className="ml-2">
              Project Deadline : <span>6 weeks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
