import RatingCart from "../../components/ratingCart/ratingCart";
import { testArr } from "../../data/ratingData";
import styles from "./ratingSection.module.scss";

const RatingSection = () => {
  return (
    <section id="section1" className={styles.root}>
      <h2>Рейтинг отрядов</h2>
      <div className={styles.ratingWrapper}>
        {testArr.map((item) => (
          <RatingCart {...item} />
        ))}
      </div>
    </section>
  );
};

export default RatingSection;
