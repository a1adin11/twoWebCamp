import { FC } from "react";
import styles from "./video.module.scss";
import { IVideoData } from "../../types";

const Video: FC<IVideoData> = ({ prev, src }) => {
  return (
    <video className={styles.root} controls poster={src} src={prev}>
      Ваш браузер не поддерживает тег video.
    </video>
  );
};

export default Video;
