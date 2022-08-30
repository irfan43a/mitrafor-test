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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam et temporibus earum accusantium, accusamus est dolor rem voluptate dolore? Amet tempore laborum, corporis vero veritatis ipsum quam accusamus harum.</p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut numquam accusamus, delectus saepe magni distinctio iure voluptatibus quam! Voluptas ea nesciunt distinctio quaerat facere officia molestiae tempora quod consequuntur
            dolorum.
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, tempora molestias laudantium possimus rem beatae sed reprehenderit odio omnis dolor ratione, ea in voluptatum non nulla autem. Necessitatibus sint reiciendis,
              veritatis fugiat, amet dignissimos sit maiores iste, quae repellendus itaque consectetur mollitia molestiae! Pariatur, doloribus tempora nemo est ratione vel commodi facilis ea nisi blanditiis asperiores deleniti dicta unde
              beatae distinctio vitae itaque eum, error cum. Maxime assumenda iusto natus doloribus! Ea, quos itaque cumque et nobis fuga odit ipsa dicta ex enim iste molestias, beatae accusamus accusantium autem fugiat labore modi
              consequatur quo! Facilis voluptas mollitia ad. Dolores, asperiores!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
