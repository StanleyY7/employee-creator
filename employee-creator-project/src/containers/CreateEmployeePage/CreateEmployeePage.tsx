import generalStyles from "../../App.module.scss";
import styles from "./CreateEmployeePage.module.scss";

import BackButton from "../../components/BackButton/BackButton";
import Form from "../../components/Form/Form";
const CreateEmployeePage = () => {
  return (
    <>
      <div>
        <section>
          <div
            className={`${generalStyles.Header__Container} ${styles.CreateEmployeePage__wrapper}`}
          >
            <BackButton />
            <h1>Employee Creation</h1>
          </div>
          <div className={styles.CreateEmployeePage__Grid}>
            <Form />
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateEmployeePage;
