import { createContext, useContext, useState, SetStateAction } from "react";
import { useQuery } from "react-query";
import { getAll } from "../../services/employee";

const contextValue = {
  fullTime: {},
  setFulltime: (employmentType: SetStateAction<boolean>) => {},
  partTime: {},
  setPartTime: (employmentType: SetStateAction<boolean>) => {},
  contract: {},
  setContract: (contractType: SetStateAction<boolean>) => {},
  permanent: {},
  setPermanent: (contractType: SetStateAction<boolean>) => {},
  clicked: {},
  setClicked: (clicked: SetStateAction<boolean>) => {},
  employees: [],
  setEmployees: (employee: any) => {},
  edit: {},
  setEdit: (edit: SetStateAction<boolean>) => {},
  data: [],
  selectEmployee: {} as any,
  setSelectEmployee: (employee: any) => {},
};

export const FormContext = createContext(contextValue);

export const useFormContext = () => useContext(FormContext);

export const ContextProvider = ({ children }: any) => {
  const [fullTime, setFulltime] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [contract, setContract] = useState(false);
  const [permanent, setPermanent] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [edit, setEdit] = useState(false);
  const { data } = useQuery("getEmployees", getAll);
  const [selectEmployee, setSelectEmployee] = useState([]);
  return (
    <FormContext.Provider
      value={{
        fullTime,
        setFulltime,
        partTime,
        setPartTime,
        contract,
        setContract,
        permanent,
        setPermanent,
        clicked,
        setClicked,
        employees,
        setEmployees,
        edit,
        setEdit,
        data,
        selectEmployee,
        setSelectEmployee,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
