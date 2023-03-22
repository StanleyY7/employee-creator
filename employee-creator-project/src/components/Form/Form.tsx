import styles from "./Form.module.scss";

import { useForm } from "react-hook-form";
import { FormTypes } from "../../types/form";
import {
  combineStartDate,
  onSubmitData,
  combineEndDate,
} from "../../services/formServices";
import PISection from "../PISection/PISection";
import { CDSection } from "../CDSection/CDSection";
import { ESSection } from "../ESSection/ESSection";
import { ButtonsContainer } from "../ButtonsContainer/ButtonsContainer";
import { useSelector } from "react-redux";
import { patchById } from "../../services/employee";

const Form = () => {
  const edit = useSelector((state: any) => state.form.edit);
  const selectEmployee = useSelector((state: any) => state.form.selectEmployee);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormTypes>();

  const onEditData = (data: any) => {
    const cleanedData = {
      id: selectEmployee.id,
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      address: data.address,
      employmentType: data.employmentType.toString(),
      contractType: data.contractType.toString(),
      email: data.email,
      phoneNumber: data.phoneNumber,
      onGoing: data.onGoing,
      hoursPW: data.hoursPW,
      datesEmployedFirst: combineStartDate(data),
      datesEmployedEnd: combineEndDate(data),
    };
    console.log(data);
    patchById(cleanedData);
  };

  const onSubmit = (data: FormTypes) => {
    if (edit) {
      onEditData(data);
    } else {
      onSubmitData(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Form__container}>
      <PISection register={register} errors={errors} />
      <CDSection register={register} errors={errors} />
      <ESSection register={register} errors={errors} setValue={setValue} />
      <ButtonsContainer />
    </form>
  );
};
export default Form;
