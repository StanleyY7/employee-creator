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
      <form className={styles.Form__Container}>
        <div>
          <h2>Personal Information</h2>
          <p>First name</p>
          <input type="text"></input>
          <p>Middle name (if applicable)</p>
          <input type="text"></input>
          <p>Last name</p>
          <input type="text"></input>
        </div>

        <div>
          <h2>Contact Details</h2>
          <p>Email address</p>
          <input type="email"></input>
          <p>Mobile number</p>
          <input type="text"></input>
          <p>Residential address</p>
          <input type="text"></input>
        </div>

        <div>
          <h2>Employee Status</h2>

          <div>
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

          <div className={styles.checkbox}>
            <input type="checkbox"></input>
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
          <input type="number" min="0" max="168"></input>
        </div>
      </form>
    </>
  );
};

export default Form;
