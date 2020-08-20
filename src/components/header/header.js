import React from "react";
import styles from "./header.module.scss";

import menuIcon from "../../icons/menu.svg";
import moreIcon from "../../icons/more-vertical.svg";
import FCMB_logo from "../../icons/FCMB_logo.svg";
import notify_icon from "../../icons/bell.svg";
import shield from "../../icons/shield.svg";
import badge from "../../icons/badge.svg";
import dropdown from "../../icons/dropdown.svg";
import search from "../../icons/search.svg";
import profile_image from "../../images/profile-image.png";

export default () => {
  return (
    <header className={styles.header}>
      <div className="d-flex justify-content-between">
        <div
          className={`d-flex justify-content-between align-items-center`}
          style={{ width: "50%" }}
        >
          <img src={menuIcon} alt="menu-icon" className="mr-3" />

          <div className={`d-flex align-items-end`}>
            <img src={FCMB_logo} alt="" />{" "}
            <img src={moreIcon} alt="" className={`ml-1`} />
          </div>

          <div className={styles.vr}></div>

          <form
          className="d-flex align-items-center"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <img src={search} alt="search icon" className="mr-1"/>
            <input type="search" placeholder="Search" />
          </form>
        </div>

        <div
          className={`d-flex justify-content-between align-items-center`}
          style={{ width: "35%" }}
        >
          <img src={notify_icon} alt="notification" />

          <div className={`${styles.owner} d-flex align-items-center`}>
            <img src={shield} alt="shield icon" />
            <div className={styles.vr}></div>
            <span>Owner</span>
          </div>

          <img src={badge} alt="badge" />

          <div className={`${styles.profile_image} d-flex align-items-center`}>
            <div className="d-flex align-items-center mr-3">
              <div className={styles.image_cropper}>
                <img src={profile_image} alt="profile" />
              </div>

              <h3>
                Chioma Davis <br />
                <span>Chioma@natterbase</span>
              </h3>
            </div>

            <div>
              <img src={dropdown} alt="dropdown icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
