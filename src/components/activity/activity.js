import React from "react";
import styles from "./activity.module.scss";

import moreIcon from "../../icons/more-vertical-sm.svg";
import addIcon from "../../icons/add.svg";
import clock from "../../icons/clock.svg";
import plus from "../../icons/plus.svg";

import user1 from "../../images/user1.png";
import user2 from "../../images/user2.png";
import user3 from "../../images/user3.png";
import user4 from "../../images/user4.png";

const AddNew = () => {
  return (
    <button className={styles.addnew_card}>
      <img src={addIcon} alt="add-icon" />
    </button>
  );
};

export const ActivityTitle = ({ title, displayMoreMenu }) => {
  return (
    <div className="d-flex justify-content-between">
      <h4>{title}</h4>
      {displayMoreMenu ? <img src={moreIcon} alt="" /> : null}
    </div>
  );
};

export const Task = ({ assignment, date }) => {
  let relativeUserPosition = -4;
  let style = { position: "relative" };
  return (
    <div className={styles.task_card}>
      <div className="d-flex justify-content-between align-items-start">
        <p>{assignment}</p>
        <img src={moreIcon} alt="" />
      </div>

      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <img src={clock} alt="clock icon" className={styles.icon} />
          <span className={styles.due_date + " due-date"}>due {date}</span>
        </div>

        <div className="d-flex align-items-center">
          <img
            src={user1}
            alt="user"
            style={{ ...style, right: relativeUserPosition * 4 }}
          />
          <img
            src={user2}
            alt="user"
            style={{ ...style, right: relativeUserPosition * 3 }}
          />
          <img
            src={user3}
            alt="user"
            style={{ ...style, right: relativeUserPosition * 2 }}
          />
          <img
            src={user4}
            alt="user"
            style={{ ...style, right: relativeUserPosition }}
          />
          <span className={styles.more_users + " more_users"}>+4</span>
        </div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div className={styles.activity}>
      <div className={styles.main}>
        <div>
          <ActivityTitle title="Backlog" displayMoreMenu={true} />
          <AddNew />
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <textarea name="task" id=""></textarea>
          </form>
          <Task
            assignment="Apply gredient colours on the dashboard sidenav"
            date="Aug 8"
          />
          <Task
            assignment="Apply gredient colours on the dashboard sidenav"
            date="Aug 8"
          />
          <Task
            assignment="Apply gredient colours on the dashboard sidenav"
            date="Aug 8"
          />
          <Task
            assignment="Apply gredient colours on the dashboard sidenav"
            date="Aug 8"
          />
          <Task
            assignment="Apply gredient colours on the dashboard sidenav"
            date="Aug 8"
          />
        </div>

        <div>
          <ActivityTitle title="Todo" displayMoreMenu={true} />
          <AddNew />
          <div className={styles.empty_task}></div>
        </div>

        <div>
          <ActivityTitle title="In Progress" displayMoreMenu={true} />
          <AddNew />
          <div className={styles.empty_task}></div>
        </div>

        <div>
          <ActivityTitle title="In Review" displayMoreMenu={true} />
          <AddNew />
          <div className={styles.empty_task}></div>
        </div>

        <div>
          <ActivityTitle title="Done" displayMoreMenu={true} />
          <AddNew />
          <div className={styles.empty_task}></div>
        </div>

        <button className={styles.floatingActionButton}>
          <img src={plus} alt="plus icon" />
        </button>
      </div>
    </div>
  );
};
