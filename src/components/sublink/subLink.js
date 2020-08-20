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

export default ({ links, displaySwitcher, icon, duration }) => {
  console.log(links);
  return (
    <div className={styles.sublink}>
      <div className={styles.overall}>
        <nav>
          <ul>
            {links.map((link, index) => (
              <NavLink name={link.name} active={link.active} key={index} />
            ))}
          </ul>
        </nav>

        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "40%", paddingBottom: 11 }}
        >
          {displaySwitcher ? (
            <div className={"d-flex align-items-center " + styles.toggle}>
              <span className="mr-3">All Task</span>
              <input type="checkbox" id="switch" />
              <label htmlFor="switch">Toggle</label>
              <span className="ml-3">All Modules</span>
            </div>
          ) : null}

          <div
            className={"d-flex align-items-center " + styles.project_duration}
          >
            <img src={icon} alt="clock icon" />
            <div className="ml-2">
          Project Deadline : <span>{duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
