import {
  DarkButton,
  ColumnContainer,
  Input,
  RowContainer,
  Text,
  Title,
  StyledLink,
  ErrorMessage,
  SuccessMessage,
} from '../styled/styled';

import logo from '../assets/Cut-Logo.png';
import { useAuthContext } from '../context/AuthContext';
import { useRef, useState } from 'react';

const ResetPassword = () => {
  const { resetPassword } = useAuthContext();
  const emailRef = useRef();
  const [error, setError] = useState('');
  const [sentMessage, setSentMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const email = emailRef.current.value;

    try {
      await resetPassword(email);
      setSentMessage('The reset link was sent to your e-mail.');
    } catch (err) {
      console.log(err.message);
      setError('Failed to reset password. Please, try again.');
    }
  };

  return (
    <RowContainer
      style={{
        minHeight: '100svh',
        background: 'rgb(250, 250, 250)',
        flexWrap: 'wrap-reverse',
        alignItems: 'stretch',
      }}
    >
      <ColumnContainer
        style={{
          flexGrow: '1',
          gap: '30px',
          borderRadius: '20px',
          padding: '30px 10px',
        }}
      >
        <Title>Reset your password</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {sentMessage && <SuccessMessage>{sentMessage}</SuccessMessage>}

        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
          onSubmit={handleSubmit}
        >
          <ColumnContainer style={{ width: '80%' }}>
            <Text style={{ padding: '10px' }}>
              To receive a link to reset your password, please enter your email
              address.
            </Text>
            <Input type="text" placeholder="E-mail" ref={emailRef} required />
            <DarkButton type="submit">Reset Password</DarkButton>
            <Text style={{ padding: '10px' }}>
              <StyledLink to={'/signin'}>Go back to Login</StyledLink>
            </Text>
          </ColumnContainer>
        </form>
      </ColumnContainer>

      <ColumnContainer
        style={{
          flexGrow: '1',
          background: '#0D2329',
          justifyContent: 'center',
          padding: '10px',
        }}
      >
        <img
          src={logo}
          alt="FDB Consulting Logo"
          style={{ maxWidth: 'min(400px, 100%)', height: 'auto' }}
        />
      </ColumnContainer>
    </RowContainer>
  );
};

export default ResetPassword;
