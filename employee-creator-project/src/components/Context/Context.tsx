import { createContext, useContext, useState, SetStateAction } from "react";

const contextValue = {
  fullTime: {},
  setFulltime: (employmentType: SetStateAction<boolean>) => {},
  partTime: {},
  setPartTime: (employmentType: SetStateAction<boolean>) => {},
  contract: {},
  setContract: (contractType: SetStateAction<boolean>) => {},
  permanent: {},
  setPermanent: (contractType: SetStateAction<boolean>) => {},
  clicked: {},
  setClicked: (clicked: SetStateAction<boolean>) => {},
};

export const FormContext = createContext(contextValue);

export const useFormContext = () => useContext(FormContext);

export const ContextProvider = ({ children }: any) => {
  const [fullTime, setFulltime] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [contract, setContract] = useState(false);
  const [permanent, setPermanent] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <FormContext.Provider
      value={{
        fullTime,
        setFulltime,
        partTime,
        setPartTime,
        contract,
        setContract,
        permanent,
        setPermanent,
        clicked,
        setClicked,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
