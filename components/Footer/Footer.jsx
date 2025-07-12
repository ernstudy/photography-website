import styles from "./footer.module.css";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.info}>
        © {year} Ken Zee | Developed by{" "}
        <a className={styles.link} href="https://ernstudy.com">
          Ernstudy
        </a>
      </p>
    </footer>
  );
}
