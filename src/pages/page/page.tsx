import { useNavigate } from "react-router";
import Header from "../../components/header/header";
import OrganizersSection from "../../pageBlocks/organizersSection/organizersSection";
import RatingSection from "../../pageBlocks/ratingSection/ratingSection";
import SectionOne from "../../pageBlocks/sectionOne/sectionOne";
import styles from "./page.module.scss";
import { useEffect, useState } from "react";
import VideoSection from "../../pageBlocks/videoSection/videoSection";
// import VideoSection from "../../pageBlocks/videoSection/videoSection";

const Page = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10000);
  }, []);

  return (
    <div className={styles.root}>
      <div
        style={{ visibility: isVisible ? "visible" : "hidden" }}
        className={`${styles.popup} ${isVisible ? styles.opacity : ""}`}
        onClick={() => navigate("/comics")}
      >
        <div className={styles.closeBtn} onClick={() => setIsVisible(false)}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="7.2218"
              y="21.364"
              width="20"
              height="2"
              transform="rotate(-45 7.2218 21.364)"
              fill="#FF2121"
            />
            <rect
              x="21.364"
              y="22.7782"
              width="20"
              height="2"
              transform="rotate(-135 21.364 22.7782)"
              fill="#FF2121"
            />
          </svg>
        </div>
        <h2 className={styles.danger}>Внимание!!!</h2>
        <p className={styles.text}>
          Новый выпуск уже захватил внимание тысяч пользователей
        </p>
        <p className={styles.animation}>
          Вызывает зависимость, при применении проконсультироваться со
          специалистом!!!
        </p>
      </div>
      <Header />
      <SectionOne />
      <RatingSection />
      <OrganizersSection />
      <VideoSection />
    </div>
  );
};

export default Page;
