import styles from "./Form.module.scss";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import { FormTypes } from "../../types/form";
import {
  currentDay,
  currentMonth,
  currentYear,
  onSubmitData,
} from "../../services/form";

const Form = () => {
  // State
  const [fullTime, setFulltime] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [contract, setContract] = useState(false);
  const [permanent, setPermanent] = useState(false);
  const [clicked, setClicked] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormTypes>();

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmitData)}
      className={styles.Form__container}
    >
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

      <div className={styles.employeeStatus__wrapper}>
        <h2>Employee Status</h2>
        <div className={styles.contractType__container}>
          <p>What is contract type?</p>

          <div className={styles.checkbox__container}>
            <input
              type="checkbox"
              id="contract"
              value="Permanent"
              {...register("contractType")}
              onChange={(e) => {
                setPermanent(true);
                setValue("contractType", e.target.checked ? "Permanent" : "");
              }}
            ></input>
            <label
              className={styles.checkbox__label}
              htmlFor="contract"
            ></label>
            <p>Permanent</p>
          </div>
        </div>
        <div className={styles.checkbox__container}>
          <input
            type="checkbox"
            id="contractType2"
            value="Contract"
            {...register("contractType")}
            onChange={(e) => {
              setContract(true);
              setValue("contractType", e.target.checked ? "Contract" : "");
            }}
          ></input>
          <label
            className={styles.checkbox__label}
            htmlFor="contractType2"
          ></label>
          <p>Contract</p>
        </div>

        {errors.contractType && !contract && !permanent && (
          <p
            className={styles.error__message}
          >{`${errors.contractType.message}`}</p>
        )}
      </div>

      <div>
        <p>Start Date</p>
        <div className={styles.date__wrapper}>
          <div className={styles.date__labelContainer}>
            <p>Day</p>
            <input
              type="number"
              min="1"
              max="31"
              {...register("startDay", { required: true })}
              onChange={(event) => {
                setValue("startDay", event.target.value);
              }}
            ></input>
          </div>

          <div className={styles.date__labelContainer}>
            <p className={styles.months}>Month</p>
            <select
              {...register("startMonth", { required: true })}
              name="startMonth"
              onChange={(event) => {
                setValue("startMonth", event.target.value);
              }}
            >
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
              max="3000"
              {...register("startYear", { required: true })}
              maxLength={4}
              onChange={(event) => {
                setValue("startYear", event.target.value);
              }}
            ></input>
          </div>
        </div>
        {errors.startDay || errors.startMonth || errors.startYear ? (
          <p className={styles.error__message}>This field is required^</p>
        ) : null}

        {!clicked && (
          <>
            <p>End Date</p>
            <div className={styles.date__wrapper}>
              <div className={styles.date__labelContainer}>
                <p>Day</p>
                <input
                  type="number"
                  min="1"
                  max="31"
                  {...register("endDay", { required: true })}
                  onChange={(event) => {
                    setValue("endDay", event.target.value);
                  }}
                ></input>
              </div>

              <div className={styles.date__labelContainer}>
                <p className={styles.months}>Month</p>
                <select
                  {...register("endMonth", { required: true })}
                  name="endMonth"
                  onChange={(event) => {
                    setValue("endMonth", event.target.value);
                  }}
                >
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
                  max="3000"
                  {...register("endYear", { required: true })}
                  maxLength={4}
                  onChange={(event) => {
                    setValue("endYear", event.target.value);
                  }}
                ></input>
              </div>
            </div>
            {errors.endDay || errors.endMonth || errors.endYear ? (
              <p className={styles.error__message}>This field is required^</p>
            ) : null}
          </>
        )}

        <div className={styles.checkbox__container}>
          <input
            type="checkbox"
            className={styles.checkbox__normal}
            {...register("onGoing")}
            onChange={() => {
              setClicked(!clicked);
              setValue("endDay", currentDay);
              setValue("endMonth", currentMonth);
              setValue("endYear", currentYear);
            }}
          ></input>
          <p>On-Going</p>
        </div>

        <p>Is this on a full-time or part-time basis?</p>

        <div>
          <div className={styles.checkbox__container}>
            <input
              type="checkbox"
              id="employmentType"
              value="Full-time"
              {...register("employmentType", { required: true })}
              onChange={(e) => {
                setFulltime(true);
                setValue("employmentType", e.target.checked ? "Full-time" : "");
              }}
            ></input>
            <label
              className={styles.checkbox__label}
              htmlFor="employmentType"
            ></label>
            <p>Full-time</p>
          </div>
        </div>

        <div>
          <div className={styles.checkbox__container}>
            <input
              type="checkbox"
              id="employmentType2"
              value="Part-time"
              {...register("employmentType", { required: true })}
              onChange={(e) => {
                setPartTime(true);
                setValue("employmentType", e.target.checked ? "Part-time" : "");
              }}
            ></input>
            <label
              className={styles.checkbox__label}
              htmlFor="employmentType2"
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
          id="hoursPW"
          className={styles.input__hours}
          {...register("hoursPW")}
        ></input>
        {errors.hoursPW && (
          <p className={styles.error__message}>This field is required^</p>
        )}
      </div>

      <div>
        <div className={styles.Form__buttonContainer}>
          <input type="submit" className={styles.Form__saveButton} />
          <NavLink to="/all-employees">
            <button className={styles.Form__cancelButton}>Cancel</button>
          </NavLink>
        </div>
      </div>
    </form>
  );
};
export default Form;
