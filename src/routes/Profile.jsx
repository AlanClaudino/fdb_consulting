import {useRef, useState} from "react";
import ProfileForm from "../components/ProfileForm/ProfileForm";
import {
  Title,
  ColumnContainer,
  StyledLink,
  ErrorMessage,
  ModalSuccess,
  Text,
} from "../components/styledold/styled";
import {useAuthContext} from "../context/AuthContext";

const Profile = () => {
  const [active, setActive] = useState();
  const [error, setError] = useState(false);
  const userNameRef = useRef();
  const dialogRef = useRef();
  const formRef = useRef();
  const {update, user} = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const avatar = active;

    const userInfo = {};

    if (userName) {
      userInfo["displayName"] = userName;
    }

    if (avatar) {
      userInfo["photoURL"] = avatar;
    }

    try {
      await update(userInfo);
      dialogRef.current.showModal();
      formRef.current.reset();
    } catch (err) {
      console.log(err.message);
      setError(true);
    }
  };

  const handleActive = (e) => {
    setActive(e.target.value);
  };

  return (
    <div style={{padding: "15px"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          gap: "15px",
          alignItems: "stretch",
          justifyContent: "start",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "20px",
          height: "100%",
          width: "100%",
        }}
      >
        <ColumnContainer>
          <Title>Profile Information</Title>
          {error && (
            <ErrorMessage>
              An error has ocurred. Please, try again.
            </ErrorMessage>
          )}
          {!user.displayName && (
            <Text style={{fontSize: "20px", padding: "15px 0"}}>
              Hello there! Welcome to{" "}
              <span style={{color: "#4bb543", fontWeight: "bolder"}}>
                FDB Consulting
              </span>
              . Please, fill out your profile information.
            </Text>
          )}
          <ProfileForm
            handleSubmit={handleSubmit}
            userNameRef={userNameRef}
            active={active}
            handleActive={handleActive}
            formRef={formRef}
          />
          <ModalSuccess ref={dialogRef}>
            <Text>
              Success: Your profile has been updated. Go back to your{" "}
              <StyledLink to={"/"}>Dashboard</StyledLink>.
            </Text>
          </ModalSuccess>
        </ColumnContainer>
      </div>
    </div>
  );
};

export default Profile;
