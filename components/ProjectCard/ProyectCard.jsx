import Image from "next/image";
import styles from "./ProyectCard.module.css";

export default function ProjectCard({ project }) {
  return (
    <>
      <div className={styles.card}>
        <Image
          width={400}
          height={300}
          src={project.image}
          alt={project.title}
          className={styles.image}
        />
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <span className={styles.date}>{project.date}</span>
          <button className={styles.button}>View more</button>
        </div>
      </div>
    </>
  );
}
