import React, { useEffect, useState } from "react";

import { Task, ActivityTitle } from "../activity/activity";
import styles from "./testActivity.module.scss";
import dropdown_icon from "../../icons/dropdown-white.svg";
import bag_icon from "../../icons/bag.svg";

const TestCase = ({ test, show, showDropdown }) => {
  return (
    <div
      className={
        styles.testCase + " d-flex justify-content-between align-items-center"
      }
    >
      <span>{test}</span>
      <div style={{ position: "relative" }}>
        <button
        // onClick={() => {
        //   show(true);
        // }}
        >
          pass <img src={dropdown_icon} alt="dropdown icon" />
        </button>
        <Dropdown display={showDropdown} />
      </div>
    </div>
  );
};

const Dropdown = ({ display }) => {
  let showClass = display ? "show" : "";
  return (
    <div className={showClass + " " + styles.dropdown_content}>
      <form>
        <input type="search" placeholder="Search name" />
      </form>

      <ul>
        <li>Pass</li>
        <li>Failed</li>
        <li>Retest</li>
        <li>Untest</li>
      </ul>
    </div>
  );
};

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

  const [showDropdown, setShowDropdown] = useState(false);

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
              <TestCase
                test={test}
                key={index}
                show={setShowDropdown}
                showDropdown={showDropdown}
              />
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