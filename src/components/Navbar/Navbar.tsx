import { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";

// Define uma interface para as props
interface NavbarProps {
  setMenuOpen: (menuOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ setMenuOpen }) => {
  const [menuOpenLocal, setMenuOpenLocal] = useState(false);

  const handleMenuClick = () => {
    const newMenuOpenState = !menuOpenLocal;
    setMenuOpenLocal(newMenuOpenState);
    setMenuOpen(newMenuOpenState);
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
          className={`${styles.menuItems} ${
            menuOpenLocal ? styles.menuOpen : ""
          }`}
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
