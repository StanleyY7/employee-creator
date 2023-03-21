import Form from "../../components/Form/Form";
import generalStyles from "../../App.module.scss";
import styles from "../CreateEmployeePage/CreateEmployeePage.module.scss";
import BackButton from "../../components/BackButton/BackButton";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEdit } from "../../components/Redux/formSlice";

const EditEmployeePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEdit(true));
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
