import styles from "./Form.module.scss";

import { useForm } from "react-hook-form";
import { FormTypes } from "../../types/form";
import { onSubmitData } from "../../services/formServices";
import PISection from "../PISection/PISection";
import { CDSection } from "../CDSection/CDSection";
import { ESSection } from "../ESSection/ESSection";
import { ButtonsContainer } from "../ButtonsContainer/ButtonsContainer";
import { useContext } from "react";
import { FormContext } from "../Context/Context";

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormTypes>();
  const { edit } = useContext(FormContext);

  return (
    <form
      onSubmit={handleSubmit(edit ? () => {} : onSubmitData)}
      className={styles.Form__container}
    >
      <PISection register={register} errors={errors} />
      <CDSection register={register} errors={errors} />
      <ESSection register={register} errors={errors} setValue={setValue} />
      <ButtonsContainer />
    </form>
  );
};
export default Form;
