import Form from "../../components/Form/Form";
import generalStyles from "../../App.module.scss";
import styles from "../CreateEmployeePage/CreateEmployeePage.module.scss";
import BackButton from "../../components/BackButton/BackButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEdit, setSelectEmployee } from "../../components/Redux/formSlice";

const EditEmployeePage = () => {
  const dispatch = useDispatch();
  const employee = useSelector((state: any) => state.form.selectEmployee);
  useEffect(() => {
    dispatch(setEdit(true));
    dispatch(setSelectEmployee(employee));
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
