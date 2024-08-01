
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:pedro_noronha@outlook.com">
            pedro_noronha@outlook.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pedro-henrique-noronha/"
          >
            linkedin.com/pedro-henrique-noronha/
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a target="_blank" href="https://github.com/xPedroNoronhax">
            github.com/xPedroNoronhax
          </a>
        </li>
      </ul>
    </footer>
  );
};
