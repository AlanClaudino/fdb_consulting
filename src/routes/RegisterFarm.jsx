import {useRef, useState} from "react";
import RegisterFarmForm from "../components/RegisterFarmForm/RegisterFarmForm";
import {useAuthContext} from "../context/AuthContext";
import {useDbContext} from "../context/dbContext";
import {useNavigate} from "react-router-dom";

const RegisterFarm = () => {
  const [error, setError] = useState("");

  const idNumberRef = useRef();
  const farmNameRef = useRef();
  const registrationRef = useRef();
  const countyRef = useRef();
  const stateRef = useRef();

  const {user} = useAuthContext();
  const {createFarm} = useDbContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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
      userId: user.uid,
    };

    try {
      await createFarm(NewFarm);
      navigate("/farm");
    } catch (error) {
      console.log(error.message);
      setError("Failed to register Farm. Please, try again.");
    }
  };

  return (
    <RegisterFarmForm
      handleSubmit={handleSubmit}
      idNumberRef={idNumberRef}
      farmNameRef={farmNameRef}
      registrationRef={registrationRef}
      countyRef={countyRef}
      stateRef={stateRef}
      error={error}
    />
  );
};

export default RegisterFarm;
