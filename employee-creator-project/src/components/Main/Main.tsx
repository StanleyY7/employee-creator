import styles from "./Main.module.scss";

const Main = () => {
  return (
    <>
      <div className={styles.Main__Container}>
        <h1 className={styles.Main__Title}>Welcome to EC</h1>
        <div>
          <button>View Employees</button>
        </div>
      </div>
    </>
  );
};

export default Main;
