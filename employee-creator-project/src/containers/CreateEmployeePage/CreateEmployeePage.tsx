import generalStyles from "../../App.module.scss";
import styles from "./CreateEmployeePage.module.scss";
import Form from "../../components/Form/Form";

const CreateEmployeePage = () => {
  return (
    <>
      <div>
        <section>
          <div className={generalStyles.Header__Container}>
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
