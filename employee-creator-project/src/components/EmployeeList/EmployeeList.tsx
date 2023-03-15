import { getAll } from "../../services/employee";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const EmployeeList = () => {
  const { data } = useQuery("getEmployees", getAll);
  const [employees, setEmployees] = useState([]);

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
