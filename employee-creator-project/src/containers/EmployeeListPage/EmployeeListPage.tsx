import styles from "./EmployeeListPage.module.scss";
import generalStyles from "../../App.module.scss";
import EmployeeList from "../../components/EmployeeList/EmployeeList";

import { NavLink } from "react-router-dom";

const EmployeeListPage = () => {
  return (
    <>
      <div>
        <section>
          <div className={generalStyles.Header__Container}>
            <h1 className={styles.listHeading}>Employee's list</h1>
          </div>

          <div className={styles.EmployeeList__GridContainer}>
            <div className={styles.EmployeeList__Grid}>
              <div className={styles.EmployeeList__Top}>
                <p>
                  Please click on 'Edit' to find more details of each employee.
                </p>
                <NavLink to="/add-employee">
                  <button className={styles.EmployeeList__Button}>
                    Add Employee
                  </button>
                </NavLink>
              </div>
              <div className={styles.EmployeeList__Wrapper}>
                <EmployeeList />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EmployeeListPage;
