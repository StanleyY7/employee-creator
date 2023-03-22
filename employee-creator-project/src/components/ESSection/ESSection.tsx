import styles from "../Form/Form.module.scss";
import {
  currentDay,
  currentMonth,
  currentYear,
} from "../../services/formServices";
import { useSelector, useDispatch } from "react-redux";
import {
  setPermanent,
  setContract,
  setClicked,
  setPartTime,
  setFullTime,
} from "../Redux/formSlice";
export const ESSection = ({ register, errors, setValue }: any) => {
  const fullTime = useSelector((state: any) => state.form.fullTime);
  const partTime = useSelector((state: any) => state.form.partTime);
  const contract = useSelector((state: any) => state.form.contract);
  const permanent = useSelector((state: any) => state.form.permanent);

  const clicked = useSelector((state: any) => state.form.clicked);

  const edit = useSelector((state: any) => state.form.edit);

  const selectEmployee = useSelector((state: any) => state.form.selectEmployee);

  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.employeeStatus__wrapper}>
        <h2>Employee Status</h2>
        <div className={styles.contractType__container}>
          <p>What is contract type?</p>

          <div className={styles.checkbox__container}>
            <input
              type="checkbox"
              id="contract"
              value="Permanent"
              defaultChecked={
                edit && selectEmployee.contractType === "Permanent"
                  ? true
                  : false
              }
              {...register("contractType")}
              onChange={(e) => {
                dispatch(setPermanent(true));
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
            defaultChecked={
              edit && selectEmployee.contractType === "Contract" ? true : false
            }
            {...register("contractType")}
            onChange={(e) => {
              dispatch(setContract(true));
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
              defaultValue={
                edit ? selectEmployee.datesEmployed.split("-")[2] : ""
              }
            ></input>
          </div>

          <div className={styles.date__labelContainer}>
            <p className={styles.months}>Month</p>
            <select
              {...register("startMonth", { required: true })}
              defaultValue={
                edit ? selectEmployee.datesEmployed.split("-")[1] : "01"
              }
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
              defaultValue={
                edit ? selectEmployee.datesEmployed.split("-")[0] : ""
              }
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
                  defaultValue={
                    edit ? selectEmployee.datesEmployedEnd.split("-")[2] : ""
                  }
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
                  defaultValue={
                    edit ? selectEmployee.datesEmployedEnd.split("-")[1] : "01"
                  }
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
                  defaultValue={
                    edit ? selectEmployee.datesEmployedEnd.split("-")[0] : ""
                  }
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
            defaultChecked={
              edit && selectEmployee.onGoing === true
                ? (() => setClicked(!clicked)) && true
                : false
            }
            {...register("onGoing")}
            onChange={() => {
              dispatch(setClicked(!clicked));
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
              defaultChecked={
                edit && selectEmployee.employmentType === "Full-time"
                  ? true
                  : false
              }
              {...register("employmentType", { required: true })}
              onChange={(e) => {
                dispatch(setFullTime(true));
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
              defaultChecked={
                edit && selectEmployee.employmentType === "Part-time"
                  ? true
                  : false
              }
              {...register("employmentType", { required: true })}
              onChange={(e) => {
                dispatch(setPartTime(true));
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
          defaultValue={edit ? selectEmployee.hoursPW : ""}
          className={styles.input__hours}
          {...register("hoursPW")}
        ></input>
        {errors.hoursPW && (
          <p className={styles.error__message}>This field is required^</p>
        )}
      </div>
    </>
  );
};
