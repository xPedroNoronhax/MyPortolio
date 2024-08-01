import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = ({ menuOpen }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, sou o Pedro!</h1>
        <p className={styles.description}>Desenvolvedor de Software</p>
        <div className={styles.contact}>
          <a
            className={styles.contactBtn}
            href="mailto:pedro_noronha@outlook.com"
          >
            Contato
          </a>
          <a
            className={styles.contactBtn}
            href="public/CV-Pedro Noronha _.pdf"
            target="_blank"
          >
            CV
          </a>
        </div>
      </div>
      <img
        className={`${styles.heroImg} ${menuOpen ? styles.heroImgOpen : ""}`}
        src={getImageUrl("hero/me.png")}
        alt="Pedro Noronha"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
