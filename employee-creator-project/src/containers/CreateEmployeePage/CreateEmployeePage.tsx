import generalStyles from "../../App.module.scss";
import styles from "./CreateEmployeePage.module.scss";

import BackButton from "../../components/BackButton/BackButton";
import UseFormApp from "../../components/Form/useForm";
const CreateEmployeePage = () => {
  return (
    <>
      <div>
        <section>
          <div className={generalStyles.Header__Container}>
            <BackButton />
            <h1>Employee Creation</h1>
          </div>
          <div className={styles.CreateEmployeePage__Grid}>
            <UseFormApp />
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateEmployeePage;
