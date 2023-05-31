import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../context/AuthContext";

import SignUpForm from "../components/SignUpForm/SignUpForm";

const Signup = () => {
  const {signup} = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmpasswordRef.current.value;

    if (password !== confirmPassword) {
      setError("Passwords do not macth. Please, try again.");
      return;
    }

    try {
      await signup(email, password);
      navigate("/profile");
    } catch (err) {
      console.log(err.message);
      setError("Failed to create account. Please, try again.");
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
      <SignUpForm
        handleSubmit={handleSubmit}
        emailRef={emailRef}
        passwordRef={passwordRef}
        confirmpasswordRef={confirmpasswordRef}
        error={error}
      />
    </div>
  );
};

export default Signup;
