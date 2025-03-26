import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.root}>
      <ul>
        <li>
          <a href="#section1">Рейтинг</a>
        </li>
        <li>
          <a href="#section1">Организаторы</a>
        </li>
        <li>
          <a href="#section1">История</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
