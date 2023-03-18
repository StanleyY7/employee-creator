import styles from "../Form/Form.module.scss";

export const CDSection = ({ register, errors }: any) => {
  return (
    <div>
      <h2>Contact Details</h2>

      <p>Email address</p>
      <input
        type="email"
        className={styles.input__email}
        placeholder="sam.riley@gmail.com"
        maxLength={254}
        {...register("email", { required: true })}
      ></input>
      {errors.email && (
        <p className={styles.error__message}>This field is required^</p>
      )}

      <p>Mobile number</p>
      <div className={styles.input__mobileContainer}>
        <div>
          <p>+61</p>
        </div>
        <input
          className={styles.input__mobile}
          maxLength={10}
          id="phoneNumber"
          placeholder="04123456789"
          {...register("phoneNumber", { required: true })}
        ></input>
      </div>
      {errors.phoneNumber && (
        <p className={styles.error__message}>
          This field is required, only enter numbers^
        </p>
      )}

      <p>Residential address</p>
      <input
        className={styles.input__address}
        placeholder="123 Example Street, Sydney NSW 2000"
        maxLength={200}
        {...register("address", { required: true })}
      ></input>
      {errors.address && (
        <p className={styles.error__message}>This field is required^</p>
      )}
    </div>
  );
};
