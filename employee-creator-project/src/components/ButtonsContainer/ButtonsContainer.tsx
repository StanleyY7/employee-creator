import styles from "../Form/Form.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../Context/Context";
import { patchById } from "../../services/employee";

export const ButtonsContainer = () => {
  const { edit, selectEmployee } = useContext(FormContext);
  return (
    <>
      <div>
        <div className={styles.Form__buttonContainer}>
          <input
            type="submit"
            className={styles.Form__saveButton}
            onClick={
              edit
                ? () => {
                    patchById(selectEmployee);
                  }
                : () => {}
            }
          />
          <NavLink to="/all-employees">
            <button className={styles.Form__cancelButton}>Cancel</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
