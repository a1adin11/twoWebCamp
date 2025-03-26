import { FC } from "react";

import styles from "./organizerCart.module.scss";
import { IOrgProps } from "../../types";

const OrganizerCart: FC<IOrgProps> = ({ name, text, img }) => {
  return (
    <div className={styles.root}>
      <div className={styles.pictures}>
        <img src={img} alt="photo" />
        <h3>{name}</h3>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default OrganizerCart;
