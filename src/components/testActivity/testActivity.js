import React, { useState } from "react";

import { Task, ActivityTitle } from "../activity/activity";
import styles from "./testActivity.module.scss";
import dropdown_icon from "../../icons/dropdown-white.svg";
import bag_icon from "../../icons/bag.svg";

const TestCase = ({ test }) => {
  const [show, setShow] = useState(false);
  const [testStatus, setTestStatus] = useState(0);

  const handleTestStatus = (status) => {
    console.log(status);
    setTestStatus(status);
    setShow(false);
  };

  return (
    <div
      className={
        styles.testCase + " d-flex justify-content-between align-items-center"
      }
    >
      <span>{test}</span>
      <div style={{ position: "relative" }}>
        <button
          onClick={() => {
            setShow(!show);
          }}
          className={
            testStatus === 1
              ? "bg__green"
              : testStatus === 2
              ? "bg__pink2"
              : testStatus === 3
              ? "bg__orange"
              : ""
          }
        >
          {testStatus === 1
            ? "pass"
            : testStatus === 2
            ? "failed"
            : testStatus === 3
            ? "Retest"
            : "pass"}{" "}
          <img src={dropdown_icon} alt="dropdown icon" />
        </button>

        <div className={`${styles.dropdown_content} ${show ? "" : "d-none"}`}>
          <form>
            <input type="search" placeholder="Search name" />
          </form>

          <ul>
            <li onClick={() => handleTestStatus(1)}>Pass</li>
            <li onClick={() => handleTestStatus(2)}>Failed</li>
            <li onClick={() => handleTestStatus(3)}>Retest</li>
            <li>Untest</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// const Dropdown = ({ display }) => {
//   let showClass = display ? "show" : "";
//   return (
//     <div className={showClass + " " + styles.dropdown_content}>
//       <form>
//         <input type="search" placeholder="Search name" />
//       </form>

//       <ul>
//         <li>Pass</li>
//         <li>Failed</li>
//         <li>Retest</li>
//         <li>Untest</li>
//       </ul>
//     </div>
//   );
// };

const SummaryCard = ({ name, total, bg }) => {
  return (
    <div className={styles.summary_card + " " + bg}>
      <div className="d-flex align-items-center justify-content-between">
        <img src={bag_icon} alt="bag icon" />
        <span>{total}</span>
      </div>
      <h6>{name}</h6>
    </div>
  );
};

export default () => {
  let testCase = [
    "Make the background image blur",
    "Apply gredient colours on the navigation",
    "Make the background image blur",
    "Make the background image blur",
    "Apply gredient colours on the navigation",
    "Make the background image blur",
    "Apply gredient colours on the navigation",
  ];

  return (
    <div className={styles.test_activity}>
      <div className={styles.main}>
        <div>
          <ActivityTitle title="Module" displayMoreMenu={true} />
          <div className={styles.module}>
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
            <Task
              assignment="Apply gredient colours on the dashboard sidenav"
              date="Aug 8"
            />
          </div>
        </div>
        <div>
          <ActivityTitle title="Added Test case" displayMoreMenu={false} />
          <div className={styles.addTestCase}>
            {testCase.map((test, index) => (
              <TestCase test={test} key={index} />
            ))}

            <div className={styles.action_btn}>
              <button>New Test Case</button>
              <button>Test</button>
            </div>
          </div>
        </div>
        <div>
          <ActivityTitle title="Quick Overview" displayMoreMenu={false} />
          <div className={styles.overview}>
            <SummaryCard name="Total Modules" total="20" bg="bg__orange" />
            <SummaryCard name="Improvement" total="20" bg="bg__dark" />
            <SummaryCard name="Total Modules test" total="20" bg="bg__navy" />
            <SummaryCard name="Total Failed" total="20" bg="bg__pink" />
            <SummaryCard name="Total Passed" total="20" bg="bg__green" />
            <SummaryCard name="Total Untested" total="20" bg="bg__purple" />
          </div>
        </div>
      </div>
    </div>
  );
};
