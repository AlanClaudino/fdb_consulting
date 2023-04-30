import {
  DarkButton,
  ColumnContainer,
  Input,
  RowContainer,
  Text,
  Title,
  StyledLink,
  ErrorMessage,
} from '../styled/styled';

import logo from '../assets/Cut-Logo.png';
import { useAuthContext } from '../context/AuthContext';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const { signin, user } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await signin(email, password);
      navigate('/');
    } catch (err) {
      console.log(err.message);
      setError('Password or E-mail is invalid. Please, try again.');
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
        <Title>Sign in to Your Account</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}

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
            <Input type="text" placeholder="E-mail" ref={emailRef} required />
            <Input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
            <DarkButton type="submit">Sign In</DarkButton>
            <Text>
              Do not have an account yet? {user && user.email}
              <StyledLink to={'/signup'}> Sign Up.</StyledLink>
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

export default Signin;
