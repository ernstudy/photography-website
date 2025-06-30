import React from "react";
import MainButton from "../MainButton/MainButton";
import styles from "./contact.module.css";
import GoshButton from "../GoshButton/GoshButton";

export default function ContactMe() {
  return (
    <section>
      <div className={styles.contact}>
        <h2 className={styles.title}>
          Let's <span className={styles.decorate}>talk</span> about your project
        </h2>
        <GoshButton text="Contact Me" link="/contact" />
      </div>
    </section>
  );
}
