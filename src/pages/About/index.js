import React from "react";
import styles from "./about.module.css";
import SideBar from "../../components/module/sidebar";

const About = () => {
  return (
    <div className={styles.pageAbout}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <div className={styles.jumbotron}>
          <h1>About Us</h1>
        </div>
        <div className={styles.about}>
          <div className={styles.aboutmenu}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut numquam accusamus, delectus saepe magni distinctio iure voluptatibus quam! Voluptas ea nesciunt distinctio quaerat facere officia molestiae tempora quod consequuntur
            dolorum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
