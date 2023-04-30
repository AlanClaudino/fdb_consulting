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

const Signup = () => {
  const { signup, user } = useAuthContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();

  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmpasswordRef.current.value;

    if (password !== confirmPassword) {
      setError('Passwords do not macth. Please, try again.');
      return;
    }

    try {
      await signup(email, password);
      navigate('/');
    } catch (err) {
      console.log(err.message);
      setError('Failed to create account. Please, try again.');
    }
  };
  return (
    <RowContainer
      style={{
        minHeight: '100svh',
        background: 'rgb(250, 250, 250)',
        flexWrap: 'wrap',
        alignItems: 'stretch',
      }}
    >
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

      <ColumnContainer
        style={{
          flexGrow: '1',
          gap: '30px',
          borderRadius: '20px',
          padding: '30px 10px',
        }}
      >
        <Title>Create a New Account</Title>
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
            <Input type="text" placeholder="E-mail" required ref={emailRef} />
            <Input
              type="password"
              placeholder="Password"
              required
              ref={passwordRef}
            />
            <Input
              type="password"
              placeholder="Confirm password"
              required
              ref={confirmpasswordRef}
            />
            <DarkButton type="submit">Sign Up</DarkButton>
            <Text>
              Already have an account? {user && user.email}
              <StyledLink to={'/signin'}> Sign In.</StyledLink>
            </Text>
          </ColumnContainer>
        </form>
      </ColumnContainer>
    </RowContainer>
  );
};

export default Signup;
