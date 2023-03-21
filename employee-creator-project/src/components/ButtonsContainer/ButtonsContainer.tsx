import styles from "../Form/Form.module.scss";
import { NavLink } from "react-router-dom";

import { patchById } from "../../services/employee";
import { useSelector } from "react-redux";

export const ButtonsContainer = () => {
  const edit = useSelector((state: any) => state.form.edit);

  const selectEmployee = useSelector((state: any) => state.form.selectEmployee);

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
