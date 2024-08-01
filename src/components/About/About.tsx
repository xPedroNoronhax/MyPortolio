import { getImageUrl } from "../../utils.ts";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src={getImageUrl("about/aboutImage.png")}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Front-end</h3>
              <p>
                Possuo experiência em desenvolver e manter sistemas eficientes,
                responsivos e atraentes. Atuando principalmente com
                React.js,Redux,StyledComponents,TailWind,BootStrap e consumo de
                API's.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>
              <p>
                Criação e manutenção de API´s rest e restFull, através do
                Node.js, utilizando o framework Express.Trabalho com progamação
                orientada a objetos e funcional.Atuo com bancos de dados
                relacionais como MySQL e Não relacionais, utilizando MongoDB.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="" />
            <div className={styles.aboutItemText}>
              <h3>Graduação</h3>
              <p>
                - Análise e Desenvolvimento de Sistemas - Descomplica (07/25){" "}
                <br />
                - Desenvolvedor Full Stack - EBAC - (2024) <br />- Administração
                de Empresas - Unilins - (2018)
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
