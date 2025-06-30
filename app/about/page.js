"use client";
import styles from "./about.module.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={styles.about}
    >
      <div className={styles.container}>
        <div className={styles.profile}>
          <motion.img
            src="/images/profile-1.png"
            alt="Ken Zee, photographer"
            className={styles.image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          <motion.div
            className={styles.text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.heading}
            >
              About <span className={styles.decorate}> Me</span>
            </motion.h1>
            <p>
              Hello, I’m <strong>Ken Zee</strong>, a photographer driven by
              storytelling, emotion, and timeless aesthetics. Every frame I
              capture reflects someone’s story—and I’ve made it my mission to
              tell those stories with authenticity.
            </p>
            <p>
              With years of experience behind the lens, I’ve explored the power
              of portraiture, the majesty of landscapes, and the energy of live
              events. Each genre pushes me to see differently, to find meaning
              in light, motion, and detail.
            </p>
            <p>
              My creative approach is rooted in simplicity and honesty. I don’t
              chase trends; I chase moments—real, unscripted, unforgettable. A
              photograph should speak before words are said, and I design every
              shoot to make people feel relaxed, themselves, and fully present.
            </p>
            <p>
              Beyond photography, I’m a lover of nature, design, and quiet
              moments that inspire big ideas. Whether I'm hiking at sunrise or
              curating visual stories for clients, I’m always seeking beauty in
              its rawest form.
            </p>
            <p>
              I’ve had the honor of working with couples, brands, artists, and
              families—each project rooted in trust and collaboration. My goal
              is to leave people not just with images, but with experiences they
              remember and stories they cherish.
            </p>
            <p>
              If you're looking for images that go beyond the surface—photos
              that feel—I'd love to be your photographer.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
