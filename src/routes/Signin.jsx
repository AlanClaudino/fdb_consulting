import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../context/AuthContext";

import SignInForm from "../components/SignInForm/SignInForm";

const Signin = () => {
  const {signin} = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await signin(email, password);
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError("Password or E-mail is invalid. Please, try again.");
    }
  };

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100svh",
  };

  return (
    <div className="background" style={style}>
      <SignInForm
        handleSubmit={handleSubmit}
        emailRef={emailRef}
        passwordRef={passwordRef}
        error={error}
      />
    </div>
  );
};

export default Signin;
