import { useRef, useState } from 'react';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import {
  Title,
  ColumnContainer,
  SuccessMessage,
  StyledLink,
  ErrorMessage,
} from '../styled/styled';
import { useAuthContext } from '../context/AuthContext';

const Profile = () => {
  const [active, setActive] = useState();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const userNameRef = useRef();
  const { update } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const avatar = active;

    const userInfo = {};

    if (userName) {
      userInfo['displayName'] = userName;
    }

    if (avatar) {
      userInfo['photoURL'] = avatar;
    }

    try {
      await update(userInfo);
      setMessage(true);
    } catch (err) {
      console.log(err.message);
      setError(true);
    }
  };

  const handleActive = (e) => {
    setActive(e.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        gap: '15px',
        alignItems: 'stretch',
        justifyContent: 'start',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius: '20px',
        height: '100%',
        width: '100%',
      }}
    >
      <ColumnContainer>
        <Title>Profile Information</Title>
        {message && (
          <SuccessMessage>
            Success: Your profile has been updated. Go back to your{' '}
            <StyledLink to={'/'}>Dashboard</StyledLink>.
          </SuccessMessage>
        )}
        {error && (
          <ErrorMessage>An error has ocurred. Please, try again.</ErrorMessage>
        )}
        <ProfileForm
          handleSubmit={handleSubmit}
          userNameRef={userNameRef}
          active={active}
          handleActive={handleActive}
        />
      </ColumnContainer>
    </div>
  );
};

export default Profile;
