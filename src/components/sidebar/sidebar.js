import React from "react";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";
import Logo from "../../icons/Logo.svg";
import Home from "../../icons/home.svg";
import Users from "../../icons/users.svg";
import Extension from "../../icons/extension.svg";
import Card from "../../icons/card.svg";
import Expand from "../../icons/forward.svg";

const NavLink = ({ icon, active }) => {
  return (
    <li className={active ? styles.active : ""}>
      <Link to="#">
        <img src={icon} alt="icon" /> 
      </Link>
    </li>
  );
};

const UserInitials = ({ initials, bg_color }) => {
  return <Link to={"#"+initials} className={`${styles.initials} ${bg_color}`}>{initials}</Link>;
};

export default () => {
  return (
    <nav className={styles.sidenav}>
      <div className={styles.sidenav__logo}>
        <Link to="#">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <ul>
        <NavLink icon={Home} />
        <NavLink icon={Extension} active={true} />
        <NavLink icon={Users} />
        <NavLink icon={Card} />
      </ul>

      <div className={styles.listedUsers}>
        <UserInitials initials="PN" bg_color="bg__light_blue"/>
        <UserInitials initials="JI" bg_color="bg__green"/>
        <UserInitials initials="LG" bg_color="bg__purple"/>
        <UserInitials initials="AW" bg_color="bg__orange"/>
        <UserInitials initials="AW" bg_color="bg__dark_blue"/>
      </div>

      <div className={styles.button}><button className={styles.expand_btn}><img src={Expand} alt="expand"/></button></div>
    </nav>
  );
};
