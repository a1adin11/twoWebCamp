import styles from "./comicsPage.module.scss";

import comicsOne from "../../assets/img/comics/onePartComics.jpg";
import comicsTwo from "../../assets/img/comics/comics.png";
import comicsThree from "../../assets/img/comics/comics2.png";
import comicsFour from "../../assets/img/comics/comics3.png";
import comicsFive from "../../assets/img/comics/comics4.png";
import comicsSix from "../../assets/img/comics/comics5.png";

import { useNavigate } from "react-router";

const ComicsPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <svg
        className={styles.backBtn}
        onClick={() => navigate("/")}
        width="36"
        height="27"
        viewBox="0 0 36 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="11" y="9" width="25" height="10" rx="2" fill="#D9D9D9" />
        <path
          d="M5.20019 14.8364C4.51752 14.0762 4.51752 12.9238 5.20019 12.1636L11.012 5.6924C12.2375 4.32792 14.5 5.19477 14.5 7.02877L14.5 19.9712C14.5 21.8052 12.2375 22.6721 11.012 21.3076L5.20019 14.8364Z"
          fill="#D9D9D9"
        />
        <rect y="5" width="4" height="18" rx="2" fill="#D9D9D9" />
      </svg>

      <img src={comicsOne} alt="comics1" />
      <img src={comicsTwo} alt="comics2" />
      <img src={comicsThree} alt="comics3" />
      <img src={comicsFour} alt="comics4" />
      <img src={comicsFive} alt="comics4" />
      <img src={comicsSix} alt="comics4" />
    </div>
  );
};

export default ComicsPage;
