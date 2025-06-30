"use client";
import Image from "next/image";
import profile2 from "..//../public/images/profile-2.png";
import stylesCover from "./cover.module.css";
import { motion } from "framer-motion";
import MainButton from "../MainButton/MainButton";
import GoshButton from "../GoshButton/GoshButton";

export default function Cover() {
  return (
    <section>
      <div className={stylesCover.cover}>
        <motion.div
          className={stylesCover.info}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={stylesCover.name}>
            Hi, I'm <span className={stylesCover.decorate}>Ken Zee</span>
          </h1>
          <h2 className={stylesCover.profession}>Photophrapher</h2>
          <p className={stylesCover.description}>
            I'm a passionate photographer with an artistic eye and a love for
            capturing special moments.
          </p>
          <div className={stylesCover.buttons}>
            <MainButton text="Portfolio" link="/portfolio" />
            <GoshButton text="Contact Me" link="/contact" />
          </div>
        </motion.div>
        <motion.div
          className={stylesCover.imgContainer}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image className={stylesCover.img} src={profile2} alt="About me" />
        </motion.div>
      </div>
    </section>
  );
}
