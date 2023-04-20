import { useEffect } from "react";

import EmployeeCard from "../EmployeeCard/EmployeeCard";
import { setEmployees, setClicked } from "../Redux/formSlice";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { getAll } from "../../services/employee";
import { FormTypes } from "../../types/form";

const EmployeeList: any = () => {
  const employees = useSelector((state: any) => state.form.employees);

  const { data } = useQuery("getEmployees", getAll);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEmployees(data));

    // resetting onGoing value
    dispatch(setClicked(false));
  }, [data]);

  const filterRemove = (id: number) => {
    setEmployees(employees.filter((e: any) => e.id !== id));
  };

  return (
    <>
      {employees &&
        employees.map((employee: FormTypes) => (
          <EmployeeCard
            role="component"
            employee={employee}
            key={employee.id}
            filterRemove={filterRemove}
          />
        ))}
    </>
  );
};

export default EmployeeList;
