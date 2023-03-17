import * as yup from "yup";
import { FormValues } from "../types/form";
// Find Difference of Years for EmployeeCard
export const getYearsDifference = (start: string, end: string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffInMs = endDate.getTime() - startDate.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365);
  return diffInYears.toFixed(1);
};

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
  endYear: yup
    .number()
    .required()
    .test(
      "is-greater",
      "End date must be greater than start date",
      function (value) {
        const { path, createError, parent } = this;
        const startDate = combineStartDate(parent);
        const endDate = combineEndDate(parent);

        if (endDate > startDate) {
          return true;
        }

        return createError({
          path,
          message: "End date must be greater than start date",
        });
      }
    ),
  employmentType: yup
    .string()
    .oneOf(["Full-time", "Part-time"], "Please select an employment type")
    .required(),
  hoursPW: yup.number().required(),
});

// Converting Value of Dates from Form

export const combineStartDate = (data: FormValues) => {
  const day = data.startDay ?? null;
  const month = data.startMonth ?? null;
  const year = data.startYear ?? null;
  const date = new Date(`${year}-${month}-${day}`);
  return date;
};

export const combineEndDate = (data: FormValues) => {
  if (data.onGoing) return null;

  const currentDate = new Date();
  const currentDay = String(currentDate.getDate()).padStart(2, "0");
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  const currentYear = currentDate.getFullYear();

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
  startDay: "01",
  startMonth: "01",
  startYear: "1970",
  endDay: "",
  endMonth: "",
  endYear: "",
};
