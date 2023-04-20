import { FormTypes } from "./form";

export interface employees extends FormTypes {
  id: number;
  employee: any;
  register: any;
  errors: any;
  setValue: any;
  role: string;
  key: number;
  filterRemove: (id: number) => void;
  EmployeeCard: any;
}
