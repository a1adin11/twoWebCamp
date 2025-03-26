import styles from "./organizersSection.module.scss";
import OrganizerCart from "../../components/organizerCart/organizerCart";
import { orgData } from "../../data/ratingData";

const OrganizersSection = () => {
  return (
    <section className={styles.root}>
      <h2>Организаторы</h2>
      <div className={styles.orgWrapper}>
        {orgData.map((item) => (
          <OrganizerCart {...item} />
        ))}
      </div>
    </section>
  );
};

export default OrganizersSection;
