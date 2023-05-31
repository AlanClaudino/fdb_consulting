import {useRef} from "react";
import RegisterFarmForm from "../components/RegisterFarmForm/RegisterFarmForm";

const RegisterFarm = () => {
  const idNumberRef = useRef();
  const farmNameRef = useRef();
  const registrationRef = useRef();
  const countyRef = useRef();
  const stateRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const idNumber = idNumberRef.current.value;
    const farmName = farmNameRef.current.value;
    const registration = registrationRef.current.value;
    const county = countyRef.current.value;
    const state = stateRef.current.value;

    const NewFarm = {
      idNumber,
      farmName,
      registration,
      county,
      state,
    };

    console.log(NewFarm);
  };

  return (
    <RegisterFarmForm
      handleSubmit={handleSubmit}
      idNumberRef={idNumberRef}
      farmNameRef={farmNameRef}
      registrationRef={registrationRef}
      countyRef={countyRef}
      stateRef={stateRef}
    />
  );
};

export default RegisterFarm;
