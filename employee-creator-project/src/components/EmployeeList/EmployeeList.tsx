import { useContext, useEffect } from "react";
import { FormContext } from "../Context/Context";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const EmployeeList = () => {
  const { data, setEmployees, employees } = useContext(FormContext);

  useEffect(() => {
    setEmployees(data);
  }, [data]);

  const filterRemove = (id: any) => {
    setEmployees(employees.filter((e: any) => e.id !== id));
  };

  return (
    <>
      {employees &&
        employees.map((employee: any) => (
          <EmployeeCard
            employee={employee}
            key={employee.id}
            filterRemove={filterRemove}
          />
        ))}
    </>
  );
};

export default EmployeeList;
