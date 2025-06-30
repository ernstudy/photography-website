"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { clsx } from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCamera,
  faClose,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const [headerActive, setHeaderActive] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  };

  const [openMenu, setOpenMenu] = useState(false);
  const menuToggle = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={clsx(styles.header, headerActive && styles.sticky)}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <FontAwesomeIcon icon={faCamera} />
            <span>KEN</span>
          </Link>
        </div>

        <div className={styles.navContainer}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link href={link.path} key={link.name} className={styles.navLink}>
                {link.name.toString()}
              </Link>
            ))}
          </ul>
        </div>

        {/* menu */}
        <div className={styles.menu}>
          <FontAwesomeIcon
            icon={openMenu ? faClose : faBars}
            className={styles.menuIcon}
            onClick={menuToggle}
          />
          <ul
            className={clsx(styles.menuLinks, openMenu && styles["show--menu"])}
          >
            {navLinks.map((link) => (
              <li key={link.name} onClick={menuToggle}>
                <Link href={link.path} className={styles.menuLink}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}
