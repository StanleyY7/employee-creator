import Form from "../../components/Form/Form";
import generalStyles from "../../App.module.scss";
import styles from "../CreateEmployeePage/CreateEmployeePage.module.scss";
import BackButton from "../../components/BackButton/BackButton";
import { useEffect, useContext } from "react";
import { FormContext } from "../../components/Context/Context";
const EditEmployeePage = () => {
  const { setEdit } = useContext(FormContext);
  useEffect(() => {
    setEdit(true);
  }, []);
  return (
    <>
      <div>
        <div
          className={`${generalStyles.Header__Container} ${styles.CreateEmployeePage__wrapper}`}
        >
          <BackButton />
          <h1>Employee Details</h1>
        </div>
        <Form />
      </div>
    </>
  );
};

export default EditEmployeePage;
