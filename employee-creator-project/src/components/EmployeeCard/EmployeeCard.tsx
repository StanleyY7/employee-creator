import styles from "./EmployeeCard.module.scss";
import { deleteById } from "../../services/employee";
const EmployeeCard = ({ employee, filterRemove }: any) => {
  const handleRemove = () => {
    deleteById(employee.id);
    filterRemove(employee.id);
  };
  return (
    <>
      <div key={employee.id} className={styles.EmployeeCard__Container}>
        <div className={styles.EmployeeCard__Grid}>
          <div className={styles.EmployeeCard__Text}>
            <p>
              <strong>{`${employee.firstName} ${employee.lastName}`}</strong>
            </p>
            <p>{`${employee.contractType} - ${employee.datesEmployed}`}</p>
            <p>{employee.email}</p>
          </div>

          <div className={styles.EmployeeCard__Options}>
            <a href="#">Edit</a>
            <p className={styles.divider}>|</p>
            <p onClick={handleRemove}>Remove</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeCard;
