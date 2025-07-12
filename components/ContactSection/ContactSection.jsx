"use client";
import styles from "./ContactSection.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import GoshButton from "../GoshButton/GoshButton";

export default function HomeContactSection() {
  return (
    <motion.section
      className={styles.contactSection}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let’s <span className={styles.decorate}>Create</span> Something
          Timeless Together
        </motion.h2>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Whether it’s an intimate wedding, a striking editorial, or a personal
          portrait — I’m here to help you capture it with emotion and style.
          Reach out and let’s talk about your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <GoshButton text="Contact Me" link="/contact/" />
        </motion.div>
      </div>
    </motion.section>
  );
}
