import generalStyles from "../../App.module.scss";
import styles from "./CreateEmployeePage.module.scss";
import { useEffect, useContext } from "react";
import BackButton from "../../components/BackButton/BackButton";
import Form from "../../components/Form/Form";
import { FormContext } from "../../components/Context/Context";
const CreateEmployeePage = () => {
  const { setEdit } = useContext(FormContext);
  useEffect(() => {
    setEdit(false);
  }, []);

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
