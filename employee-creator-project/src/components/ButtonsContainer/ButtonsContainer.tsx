import styles from "../Form/Form.module.scss";
import { NavLink } from "react-router-dom";

export const ButtonsContainer = () => {
  return (
    <>
      <div>
        <div className={styles.Form__buttonContainer}>
          <input type="submit" className={styles.Form__saveButton} />
          <NavLink to="/all-employees">
            <button className={styles.Form__cancelButton}>Cancel</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
