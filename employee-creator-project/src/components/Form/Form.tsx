import styles from "./Form.module.scss";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { customSchema } from "../../services/general";

import { combineStartDate, combineEndDate } from "../../services/general";

const Form = () => {
  const [fullTime, setFulltime] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [contract, setContract] = useState(false);
  const [permanent, setPermanent] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customSchema),
  });

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
            {...register("firstName")}
          ></input>
          {errors.firstName && (
            <p className={styles.error__message}>This field is required^</p>
          )}

          <p>Middle name (if applicable)</p>
          <input
            className={styles.input__text}
            type="text"
            {...register("middleName")}
          ></input>
          <p>Last name</p>
          <input
            className={styles.input__text}
            type="text"
            placeholder="Smith"
            {...register("lastName")}
          ></input>
          {errors.lastName && (
            <p className={styles.error__message}>This field is required^</p>
          )}
        </div>

        <div>
          <h2>Contact Details</h2>

          <p>Email address</p>
          <input
            type="email"
            className={styles.input__email}
            placeholder="sam.riley@gmail.com"
            maxLength={254}
            {...register("email")}
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
              type="text"
              className={styles.input__mobile}
              maxLength={10}
              placeholder="04123456789"
              {...register("phoneNumber")}
            ></input>
          </div>
          {errors.phoneNumber && (
            <p className={styles.error__message}>
              This field is required, only enter numbers^
            </p>
          )}

          <p>Residential address</p>
          <input
            type="text"
            className={styles.input__address}
            placeholder="123 Example Street, Sydney NSW 2000"
            maxLength={200}
            {...register("address")}
          ></input>
          {errors.address && (
            <p className={styles.error__message}>This field is required^</p>
          )}
        </div>

        <div>
          <h2>Employee Status</h2>
          <div className={styles.contractType__container}>
            <p>What is contract type?</p>

            <div className={styles.checkbox__container}>
              <input
                type="checkbox"
                id="Permanent"
                value="Permanent"
                {...register("contractType")}
                onChange={(e) => {
                  setPermanent(true);
                  setValue("contractType", e.target.checked ? "Permanent" : "");
                }}
              ></input>
              <label
                className={styles.checkbox__label}
                htmlFor="Permanent"
              ></label>
              <p>Permanent</p>
            </div>
          </div>

          <div className={styles.checkbox__container}>
            <input
              type="checkbox"
              id="Contract"
              value="Contract"
              {...register("contractType")}
              onChange={(e) => {
                setContract(true);
                setValue("contractType", e.target.checked ? "Contract" : "");
              }}
            ></input>
            <label
              className={styles.checkbox__label}
              htmlFor="Contract"
            ></label>
            <p>Contract</p>
          </div>
          {errors.contractType && !contract && !permanent && (
            <p
              className={styles.error__message}
            >{`${errors.contractType.message}`}</p>
          )}

          <p>Start Date</p>
          <div className={styles.date__wrapper}>
            <div className={styles.date__labelContainer}>
              <p>Day</p>
              <input
                type="number"
                min="1"
                max="31"
                {...register("startDay")}
              ></input>
            </div>

            <div className={styles.date__labelContainer}>
              <p className={styles.months}>Month</p>
              <select {...register("startMonth")} name="startMonths">
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <div className={styles.date__labelContainer}>
              <p>Year</p>
              <input
                type="number"
                min="1970"
                {...register("startYear")}
              ></input>
            </div>
          </div>
          {errors.startDay || errors.startMonth || errors.startYear ? (
            <p className={styles.error__message}>This field is required^</p>
          ) : null}

          <p>Finish Date</p>
          <div className={styles.date__wrapper}>
            <div className={styles.date__labelContainer}>
              <p>Day</p>
              <input
                type="number"
                min="1"
                max="31"
                {...register("endDay")}
              ></input>
            </div>

            <div className={styles.date__labelContainer}>
              <p className={styles.months}>Month</p>
              <select {...register("endMonth")} name="endMonths">
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <div className={styles.date__labelContainer}>
              <p>Year</p>
              <input type="number" min="1970" {...register("endYear")}></input>
            </div>
          </div>
          {errors.endDay || errors.endMonth || errors.endYear ? (
            <p className={styles.error__message}>This field is required^</p>
          ) : null}

          <div className={styles.checkbox__container}>
            <input
              type="checkbox"
              className={styles.checkbox__normal}
              {...register("onGoing")}
            ></input>
            <p>On-Going</p>
          </div>

          <p>Is this on a full-time or part-time basis?</p>

          <div>
            <div className={styles.checkbox__container}>
              <input
                type="checkbox"
                id="Full-time"
                value="Full-time"
                {...register("employmentType")}
                onChange={(e) => {
                  setFulltime(true);
                  setValue(
                    "employmentType",
                    e.target.checked ? "Full-time" : ""
                  );
                }}
              ></input>
              <label
                className={styles.checkbox__label}
                htmlFor="Full-time"
              ></label>
              <p>Full-time</p>
            </div>

            <div className={styles.checkbox__container}>
              <input
                type="checkbox"
                id="Part-time"
                value="Part-time"
                {...register("employmentType")}
                onChange={(e) => {
                  setPartTime(true);
                  setValue(
                    "employmentType",
                    e.target.checked ? "Part-time" : ""
                  );
                }}
              ></input>
              <label
                className={styles.checkbox__label}
                htmlFor="Part-time"
              ></label>
              <p>Part-time</p>
            </div>
          </div>
          {errors.employmentType && !partTime && !fullTime && (
            <p className={styles.error__message}>
              {`${errors.employmentType.message}`}
            </p>
          )}

          <p>Hours per week</p>
          <input
            type="number"
            min="0"
            max="168"
            className={styles.input__hours}
            {...register("hoursPW")}
          ></input>
          {errors.hoursPW && (
            <p className={styles.error__message}>This field is required^</p>
          )}
        </div>

        <div className={styles.Form__buttonContainer}>
          <button
            className={styles.Form__saveButton}
            onClick={handleSubmit(null, null)}
          >
            Save
          </button>
          <NavLink to="/all-employees">
            <button className={styles.Form__cancelButton}>Cancel</button>
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default Form;
