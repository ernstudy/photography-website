"use client";

import Image from "next/image";
import MainButton from "../MainButton/MainButton";
import styles from "./about.module.css";
import profile from "../../public/images/profile-1.png";

export default function About() {
  return (
    <section className="section">
      <div className={styles.about}>
        <div className={styles.imageContainer}>
          <Image
            priority
            className={styles.image}
            src={profile}
            alt="profile photo"
          />
        </div>

        <div className={styles.info}>
          <h4 className={styles.title}>
            About <span className={styles.decorate}>Me</span>
          </h4>

          <h2 className={styles.profession}>Photographer</h2>

          <p className={styles.description}>
            Hello! I'm Ken Zee, a passionate photographer with an artistic eye
            and a love for capturing special moments. With years of experience
            in the industry, I have specialized in portraits, landscapes, and
            event photography. My approach is simple: to capture the beauty in
            every image. Whether it's capturing genuine emotions in a portrait,
            the grandeur of a landscape, or the vibrant energy of an event, I
            strive to make each photo tell a story.
          </p>
          <MainButton text="Read More" link="/about" />
        </div>
      </div>
    </section>
  );
}
