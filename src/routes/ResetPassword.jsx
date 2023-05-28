import {useRef, useState} from "react";
import {useAuthContext} from "../context/AuthContext";

import ResetPasswordForm from "../components/ResetPasswordForm/ResetPasswordForm";

const ResetPassword = () => {
  const {resetPassword} = useAuthContext();
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [sentMessage, setSentMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const email = emailRef.current.value;

    try {
      await resetPassword(email);
      setSentMessage("The reset link was sent to your e-mail.");
    } catch (err) {
      console.log(err.message);
      setError("Failed to reset password. Please, try again.");
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
      <ResetPasswordForm
        handleSubmit={handleSubmit}
        emailRef={emailRef}
        error={error}
        sentMessage={sentMessage}
      />
    </div>
  );
};

export default ResetPassword;
