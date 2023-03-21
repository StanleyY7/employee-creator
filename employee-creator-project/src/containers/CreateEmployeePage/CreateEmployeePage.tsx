import generalStyles from "../../App.module.scss";
import styles from "./CreateEmployeePage.module.scss";
import { useEffect } from "react";
import BackButton from "../../components/BackButton/BackButton";
import Form from "../../components/Form/Form";
import { useDispatch } from "react-redux";
import { setEdit } from "../../components/Redux/formSlice";

const CreateEmployeePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEdit(false));
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
