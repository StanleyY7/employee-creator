import styles from "./Main.module.scss";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className={styles.Main__Container}>
        <h1 className={styles.Main__Title}>Welcome to EC</h1>
        <div>
          <NavLink to="/all-employees">
            <button className={styles.Main__Button}>View Employees</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Main;
