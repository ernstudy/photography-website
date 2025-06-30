import Link from "next/link";
import styles from "./mainButton.module.css";

export default function MainButton({ text, link }) {
  return (
    <Link href={link} className={styles.button}>
      {text}
    </Link>
  );
}
