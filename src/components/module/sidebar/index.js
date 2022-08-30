import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <NavLink to="/" exact activeClassName="active">
        <div className={styles.menu}>Home</div>
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        <div className={styles.menu}>About</div>
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        <div className={styles.menu}>Contact</div>
      </NavLink>
    </div>
  );
};

export default SideBar;
