import * as yup from "yup";
import { FormValues } from "../types/form";

// Form Validation for Form

export const customSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup
    .string()
    .matches(/^\d+$/, { message: "Please enter only numbers" })
    .required(),
  address: yup.string().required(),
  contractType: yup
    .string()
    .oneOf(["Contract, Permanent"], "Please select a contract type")
    .required(),
  startDay: yup.number().required(),
  startMonth: yup.string().required(),
  startYear: yup.number().required(),
  onGoing: yup.boolean(),
  endDay: yup.number().required(),
  endMonth: yup.string().required(),
  endYear: yup.number().required(),
  employmentType: yup
    .string()
    .oneOf(["Full-time", "Part-time"], "Please select an employment type")
    .required(),
  hoursPW: yup.number().required(),
});

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

// Initial Form Values

export const initialFormValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  emailTest: "",
  phoneNumber: "",
  address: "",
  contractType: "",
  employmentType: "",
  onGoing: false,
  hoursPW: 0,
  startDay: "",
  startMonth: "01",
  startYear: "",
  endDay: "",
  endMonth: "01",
  endYear: "",
};
