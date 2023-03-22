import { useEffect } from "react";

import EmployeeCard from "../EmployeeCard/EmployeeCard";
import { setEmployees, setClicked } from "../Redux/formSlice";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { getAll } from "../../services/employee";
const EmployeeList = () => {
  const employees = useSelector((state: any) => state.form.employees);

  const { data } = useQuery("getEmployees", getAll);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEmployees(data));

    // resetting onGoing value
    dispatch(setClicked(false));
  }, [data]);

  const filterRemove = (id: any) => {
    setEmployees(employees.filter((e: any) => e.id !== id));
  };

  return (
    <>
      {employees &&
        employees.map((employee: any) => (
          <EmployeeCard
            data-testid="EmployeeCard"
            employee={employee}
            key={employee.id}
            filterRemove={filterRemove}
          />
        ))}
    </>
  );
};

export default EmployeeList;
