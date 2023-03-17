import styles from "./Form.module.scss";
import { FormValues } from "../../types/form";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  customSchema,
  initialFormValues,
  combineStartDate,
  combineEndDate,
  currentMonth,
  currentYear,
} from "../../services/form";
import { postEmployee } from "../../services/employee";

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(customSchema),
  });

  // State
  const [fullTime, setFulltime] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [contract, setContract] = useState(false);
  const [permanent, setPermanent] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = (event: any) => {
    const { value, id } = event.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const onSubmitData = async () => {
    const newEmployee: FormValues = {
      firstName: formValues.firstName,
      middleName: formValues.middleName,
      lastName: formValues.lastName,
      email: formValues.emailTest,
      phoneNumber: formValues.phoneNumber,
      address: formValues.address,
      contractType: formValues.contractType,
      datesEmployed: combineStartDate(formValues),
      datesEmployedEnd: combineEndDate(formValues),
      employmentType: formValues.employmentType,
      onGoing: formValues.onGoing,
      hoursPW: formValues.hoursPW,
    } as any;
    postEmployee(newEmployee);
  };

  return (
    <>
      <form
        className={styles.Form__container}
        onSubmit={handleSubmit(onSubmitData)}
      >
        <div>
          <h2>Personal Information</h2>

          <p>First name</p>
          <input
            className={styles.input__text}
            type="text"
            placeholder="John"
            id="firstName"
            {...register("firstName")}
            value={formValues.firstName}
            onChange={onChange}
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
            value={formValues.middleName}
            onChange={onChange}
          ></input>
          <p>Last name</p>
          <input
            className={styles.input__text}
            type="text"
            id="lastName"
            placeholder="Smith"
            {...register("lastName")}
            value={formValues.lastName}
            onChange={onChange}
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
            id="emailTest"
            placeholder="sam.riley@gmail.com"
            maxLength={254}
            {...register("email")}
            value={formValues.emailTest}
            onChange={onChange}
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
              id="phoneNumber"
              placeholder="04123456789"
              value={formValues.phoneNumber}
              {...register("phoneNumber")}
              onChange={onChange}
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
            id="address"
            {...register("address")}
            value={formValues.address}
            onChange={onChange}
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
                id="contractType"
                value="Permanent"
                {...register("contractType")}
                onChange={(e) => {
                  setPermanent(true);
                  setValue("contractType", e.target.checked ? "Permanent" : "");
                  setFormValues({ ...formValues, contractType: "Permanent" });
                }}
              ></input>
              <label
                className={styles.checkbox__label}
                htmlFor="contractType"
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
                setFormValues({ ...formValues, contractType: "Contract" });
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

          <p>Start Date</p>
          <div className={styles.date__wrapper}>
            <div className={styles.date__labelContainer}>
              <p>Day</p>
              <input
                type="number"
                min="1"
                max="31"
                {...register("startDay")}
                onChange={(event) => {
                  setFormValues((prevState) => ({
                    ...prevState,
                    startDay: event.target.value,
                  }));
                }}
              ></input>
            </div>

            <div className={styles.date__labelContainer}>
              <p className={styles.months}>Month</p>
              <select
                {...register("startMonth")}
                name="startMonths"
                onChange={(event) => {
                  setFormValues((prevState) => ({
                    ...prevState,
                    startMonth: event.target.value,
                  }));
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
                {...register("startYear")}
                maxLength={4}
                onChange={(event) => {
                  setFormValues((prevState) => ({
                    ...prevState,
                    startYear: event.target.value,
                  }));
                }}
              ></input>
            </div>
          </div>
          {errors.startDay || errors.startMonth || errors.startYear ? (
            <p className={styles.error__message}>This field is required^</p>
          ) : null}

          {!clicked && (
            <>
              <p>Finish Date</p>
              <div className={styles.date__wrapper}>
                <div className={styles.date__labelContainer}>
                  <p>Day</p>
                  <input
                    type="number"
                    min="1"
                    max="31"
                    {...register("endDay")}
                    onChange={(event) => {
                      setFormValues(() => ({
                        ...formValues,
                        endDay: event.target.value,
                      }));
                    }}
                  ></input>
                </div>

                <div className={styles.date__labelContainer}>
                  <p className={styles.months}>Month</p>
                  <select
                    {...register("endMonth")}
                    name="endMonths"
                    onChange={(event) => {
                      clicked
                        ? setFormValues(() => ({
                            ...formValues,
                            endMonth: (event.target.value = currentMonth),
                          }))
                        : setFormValues(() => ({
                            ...formValues,
                            endMonth: event.target.value,
                          }));
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
                    {...register("endYear")}
                    onChange={(event) => {
                      clicked
                        ? setFormValues(() => ({
                            ...formValues,
                            endYear: (event.target.value = currentYear),
                          }))
                        : setFormValues(() => ({
                            ...formValues,
                            endYear: event.target.value,
                          }));
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
              onChange={(event) => {
                setClicked(!clicked);
                onChange(event);
                formValues.onGoing = true;
                setFormValues({ ...formValues, onGoing: true });
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
                {...register("employmentType")}
                onChange={(e) => {
                  setFulltime(true);
                  setValue(
                    "employmentType",
                    e.target.checked ? "Full-time" : ""
                  );
                  setFormValues({ ...formValues, employmentType: "Full-time" });
                }}
              ></input>
              <label
                className={styles.checkbox__label}
                htmlFor="employmentType"
              ></label>
              <p>Full-time</p>
            </div>

            <div className={styles.checkbox__container}>
              <input
                type="checkbox"
                id="employmentType2"
                value="Part-time"
                {...register("employmentType")}
                onChange={(e) => {
                  setPartTime(true);
                  setValue(
                    "employmentType",
                    e.target.checked ? "Part-time" : ""
                  );
                  setFormValues({ ...formValues, employmentType: "Part-time" });
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
            value={formValues.hoursPW}
            {...register("hoursPW")}
            onChange={onChange}
          ></input>
          {errors.hoursPW && (
            <p className={styles.error__message}>This field is required^</p>
          )}
        </div>

        <div className={styles.Form__buttonContainer}>
          <button
            type="submit"
            onClick={onSubmitData}
            className={styles.Form__saveButton}
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
