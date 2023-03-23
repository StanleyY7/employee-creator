import styles from "../Form/Form.module.scss";
import { useSelector } from "react-redux";
export const CDSection = ({ register, errors }: any) => {
  const edit = useSelector((state: any) => state.form.edit);

  const selectEmployee = useSelector((state: any) => state.form.selectEmployee);

  return (
    <div>
      <h2>Contact Details</h2>

      <p>Email address</p>
      <input
        type="email"
        className={styles.input__email}
        placeholder="sam.riley@gmail.com"
        defaultValue={edit ? selectEmployee.email : ""}
        maxLength={254}
        {...register("email", { required: true })}
      ></input>
      {errors.email && (
        <p role="emailError" className={styles.error__message}>
          This field is required^
        </p>
      )}

      <p>Mobile number</p>
      <div className={styles.input__mobileContainer}>
        <div>
          <p>+61</p>
        </div>
        <input
          className={styles.input__mobile}
          maxLength={10}
          defaultValue={edit ? selectEmployee.phoneNumber : ""}
          placeholder="04123456789"
          {...register("phoneNumber", {
            required: true,
            pattern: /^[0-9]{10}$/,
          })}
        ></input>
      </div>
      {errors.phoneNumber && (
        <p role="phoneNumberError" className={styles.error__message}>
          This field is required, only enter numbers^
        </p>
      )}

      <p>Residential address</p>
      <input
        className={styles.input__address}
        placeholder="123 Example Street, Sydney NSW 2000"
        defaultValue={edit ? selectEmployee.address : ""}
        maxLength={200}
        {...register("address", { required: true })}
      ></input>
      {errors.address && (
        <p role="addressError" className={styles.error__message}>
          This field is required^
        </p>
      )}
    </div>
  );
};
