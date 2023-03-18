import styles from "../Form/Form.module.scss";

const PISection = ({ register, errors }: any) => {
  return (
    <div>
      <h2>Personal Information</h2>

      <p>First name</p>
      <input
        className={styles.input__text}
        placeholder="John"
        defaultValue=""
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
        {...register("middleName")}
      ></input>

      <p>Last name</p>
      <input
        className={styles.input__text}
        placeholder="Smith"
        {...register("lastName", { required: true })}
      ></input>
      {errors.lastName && (
        <p className={styles.error__message}>This field is required^</p>
      )}
    </div>
  );
};
export default PISection;
