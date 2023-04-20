import { employees } from "./general";

export type FormTypes = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  contractType: string;
  startDay: string;
  startMonth: string;
  startYear: string;
  endDay: string;
  endMonth: string;
  endYear: string;
  onGoing: boolean;
  employmentType: string;
  hoursPW: Number;
  datesEmployed: Number | string;
  datesEmployedEnd: Number | string;
};
