import { FC } from "react";

import styles from "./ratingCart.module.scss";
import { IRatingProps } from "../../types";

const RatingCart: FC<IRatingProps> = ({ squad, name, score, img }) => {
  return (
    <div className={styles.root}>
      <p>{squad} отряд</p>
      <img src={img} alt="photo" />
      <div className={styles.rightPart}>
        <span className={styles.title}>{name ? name : "Unknown"}</span>
        <div className={styles.progress} title={`${score}`}>
          <div
            className={styles.bar}
            style={{ width: `${Math.min(100, (score / 1000000) * 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RatingCart;
