import { NavLink } from "react-router-dom";
import styles from "./BackButton.module.scss";
const BackButton = () => {
  return (
    <div className={styles.backButton__container}>
      <NavLink className={styles.backButton} to="/all-employees">
        {"<"}
        <strong className={styles.back}>Back</strong>
      </NavLink>
    </div>
  );
};

export default BackButton;
