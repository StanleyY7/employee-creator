import styles from "./Form.module.scss";

import { useForm } from "react-hook-form";
import { FormTypes } from "../../types/form";
import { onSubmitData } from "../../services/formServices";
import PISection from "../PISection/PISection";
import { CDSection } from "../CDSection/CDSection";
import { ESSection } from "../ESSection/ESSection";
import { ButtonsContainer } from "../ButtonsContainer/ButtonsContainer";

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormTypes>();

  return (
    <form
      onSubmit={handleSubmit(onSubmitData)}
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
