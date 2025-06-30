import Link from "next/link";
import React from "react";
import styles from "./Gosh.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function GoshButton({ text, link }) {
  return (
    <Link href={link} className={styles.button}>
      {text}
      <FontAwesomeIcon icon={faLongArrowRight} className={styles.icon} />
    </Link>
  );
}
