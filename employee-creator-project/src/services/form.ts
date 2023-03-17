import { FormTypes } from "../types/form";
import { SubmitHandler } from "react-hook-form";
import { postEmployee } from "./employee";
// Converting Value of Dates from Form

const currentDate = new Date();
export const currentDay = String(currentDate.getDate()).padStart(2, "0");
export const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
export const currentYear = "2023";

export const combineStartDate = (data: any) => {
  const day = data.startDay ?? currentDay;
  const month = data.startMonth ?? currentMonth;
  const year = data.startYear ?? currentYear;
  const date = new Date(`${year}-${month}-${day}`);
  return date;
};

export const combineEndDate = (data: any) => {
  const day = data.endDay ?? currentDay;
  const month = data.endMonth ?? currentMonth;
  const year = data.endYear ?? currentYear;

  const date = new Date(`${year}-${month}-${day}`);
  return date;
};

// Submit Handler

export const onSubmitData: SubmitHandler<FormTypes> = async (
  data: FormTypes
) => {
  const newEmployee: FormTypes = {
    firstName: data.firstName,
    middleName: data.middleName,
    lastName: data.lastName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    address: data.address,
    contractType: data.contractType,
    datesEmployed: combineStartDate(data),
    datesEmployedEnd: combineEndDate(data),
    employmentType: data.employmentType,
    onGoing: data.onGoing,
    hoursPW: data.hoursPW,
  } as FormTypes;
  postEmployee(newEmployee);
};
