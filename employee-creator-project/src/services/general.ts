import * as yup from "yup";
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

export const combineStartDate = (data: any, setValue: any) => {
  const day = data.startDay ?? "01";
  const month = data.startMonth ?? "01";
  const year = data.startYear ?? "1970";
  const date = new Date(`${year}-${month}-${day}`);
  setValue("datesEmployed", date);
};

export const combineEndDate = (data: any, setValue: any) => {
  const day = data.endDay ?? "01";
  const month = data.endMonth ?? "01";
  const year = data.endYear ?? "1970";
  const date = new Date(`${year}-${month}-${day}`);
  setValue("datesEmployedEnd", date);
};