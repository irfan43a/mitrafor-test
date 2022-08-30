import React from "react";
import SideBar from "../../components/module/sidebar";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.pageContact}>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <div className={styles.jumbotron}>
          <h1>Contact Us</h1>
          <h5>We're here to help you grow your products</h5>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactMenu}>
            <h3>Address</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex asperiores nam repudiandae voluptas velit ullam esse excepturi fugiat! Odit corrupti nam neque voluptate cum beatae optio fuga autem nisi aliquam.</p>
          </div>
          <div className={styles.contactMenu}>
            <h3>Phone</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex asperiores nam repudiandae voluptas velit ullam esse excepturi fugiat! Odit corrupti nam neque voluptate cum beatae optio fuga autem nisi aliquam.</p>
          </div>
          <div className={styles.contactMenu}>
            <h3>Email</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex asperiores nam repudiandae voluptas velit ullam esse excepturi fugiat! Odit corrupti nam neque voluptate cum beatae optio fuga autem nisi aliquam.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
