import { useSelector } from "react-redux";

import styles from "../Form/Form.module.scss";

const PISection = ({ register, errors }: any) => {
  const edit = useSelector((state: any) => state.form.edit);

  const selectEmployee = useSelector((state: any) => state.form.selectEmployee);
  return (
    <div>
      <h2>Personal Information</h2>

      <p>First name</p>
      <input
        className={styles.input__text}
        placeholder="John"
        defaultValue={edit ? selectEmployee.firstName : ""}
        {...register("firstName", { required: true })}
      ></input>
      {errors.firstName && (
        <p className={styles.error__message}>This field is required^</p>
      )}

      <p>Middle name (if applicable)</p>
      <input
        className={styles.input__text}
        type="text"
        id="middleName"
        defaultValue={edit ? selectEmployee.middleName : ""}
        {...register("middleName")}
      ></input>

      <p>Last name</p>
      <input
        className={styles.input__text}
        placeholder="Smith"
        defaultValue={edit ? selectEmployee.lastName : ""}
        {...register("lastName", { required: true })}
      ></input>
      {errors.lastName && (
        <p className={styles.error__message}>This field is required^</p>
      )}
    </div>
  );
};
export default PISection;
