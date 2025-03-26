import { FC } from "react";

import Video from "../../components/video/video";

import styles from "./videoSection.module.scss";
import { videoData } from "../../data/ratingData";

const VideoSection: FC = () => {
  return (
    <section className={styles.root}>
      <h2>Последние новости</h2>
      <div className={styles.videoWrapper}>
        {videoData.map((item) => (
          <Video {...item} />
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
