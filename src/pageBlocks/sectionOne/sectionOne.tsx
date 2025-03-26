import styles from "./sectionOne.module.scss";
import Logo from "../../assets/img/handPng.png";

const SectionOne = () => {
  return (
    <section className={styles.root}>
      <h1>Путь к славе</h1>
      <img src={Logo} alt="photo" />
      <p>22.03-30.03</p>
    </section>
  );
};

export default SectionOne;
