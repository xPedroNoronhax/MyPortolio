import { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

export const Navbar = ({ setMenuOpen }) => {
  const [menuOpenLocal, setMenuOpenLocal] = useState(false);

  const handleMenuClick = () => {
    setMenuOpenLocal(!menuOpenLocal);
    setMenuOpen(!menuOpenLocal);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpenLocal
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={handleMenuClick}
        />
        <ul
          className={`${styles.menuItems} ${menuOpenLocal && styles.menuOpen}`}
          onClick={() => handleMenuClick(false)}
        >
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#experience">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
