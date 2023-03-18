import styles from "./EmployeeCard.module.scss";
import { deleteById } from "../../services/employee";
import { getYearsDifference } from "../../services/general";
import { NavLink } from "react-router-dom";
import { FormContext } from "../Context/Context";
import { useContext } from "react";

const EmployeeCard = ({ employee, filterRemove }: any) => {
  const handleRemove = () => {
    deleteById(employee.id);
    filterRemove(employee.id);
  };
  const { setSelectEmployee, setEdit } = useContext(FormContext);

  return (
    <>
      <div key={employee.id} className={styles.EmployeeCard__Container}>
        <div className={styles.EmployeeCard__Grid}>
          <div className={styles.EmployeeCard__Text}>
            <p>
              <strong>{`${employee.firstName} ${employee.lastName}`}</strong>
            </p>
            <p>{`${employee.contractType} - ${getYearsDifference(
              employee.datesEmployed,
              employee.datesEmployedEnd
            )}yrs`}</p>
            <p>{employee.email}</p>
          </div>

          <div className={styles.EmployeeCard__Options}>
            <NavLink
              onClick={() => {
                setSelectEmployee(employee);
                setEdit(true);
              }}
              className={styles.editLink}
              to="/edit-employee"
            >
              Edit
            </NavLink>
            <p className={styles.divider}>|</p>
            <p onClick={handleRemove}>Remove</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeCard;
