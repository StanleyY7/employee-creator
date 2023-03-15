import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form className={styles.Form__container}>
        <div>
          <h2>Personal Information</h2>
          <p>First name</p>
          <input
            className={styles.input__text}
            type="text"
            placeholder="John"
          ></input>
          <p>Middle name (if applicable)</p>
          <input className={styles.input__text} type="text"></input>
          <p>Last name</p>
          <input
            className={styles.input__text}
            type="text"
            placeholder="Smith"
          ></input>
        </div>

        <div>
          <h2>Contact Details</h2>
          <p>Email address</p>
          <input
            type="email"
            className={styles.input__email}
            placeholder="sam.riley@gmail.com"
          ></input>

          <p>Mobile number</p>
          <div className={styles.input__mobileContainer}>
            <div>
              <p>+61</p>
            </div>
            <input type="text" className={styles.input__mobile}></input>
          </div>
          <p>Residential address</p>
          <input
            type="text"
            className={styles.input__address}
            placeholder="123 Example Street, Sydney NSW 2000"
          ></input>
        </div>

        <div>
          <h2>Employee Status</h2>
          <div className={styles.contractType__container}>
            <p>What is contract type?</p>
            <select>
              <option>Permanent</option>
              <option>Contract</option>
            </select>
          </div>

          <p>Start Date</p>
          <input type="date"></input>
          <p>Finish Date</p>
          <input type="date"></input>

          <div className={styles.checkbox__container}>
            <input type="checkbox" className={styles.checkbox}></input>
            <p>Ongoing</p>
          </div>

          <p>Is this on a full-time or part-time basis?</p>

          <div>
            <select>
              <option>Full-Time</option>
              <option>Part-Time</option>
            </select>
          </div>

          <p>Hours per week</p>
          <input
            type="number"
            min="0"
            max="168"
            className={styles.input__hours}
          ></input>
        </div>
      </form>
    </>
  );
};

export default Form;
