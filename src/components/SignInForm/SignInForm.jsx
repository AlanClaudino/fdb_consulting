/* eslint-disable react/prop-types */
import logo from '../../assets/Cut-Logo.png';

import {
  DarkButton,
  ColumnContainer,
  Input,
  RowContainer,
  Text,
  Title,
  StyledLink,
  ErrorMessage,
} from '../../styled/styled';

const SignInForm = ({ handleSubmit, user, emailRef, passwordRef, error }) => {
  return (
    <>
      <RowContainer
        style={{
          flexWrap: 'wrap-reverse',
          alignItems: 'stretch',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          borderRadius: '20px',
        }}
      >
        <ColumnContainer
          style={{
            width: '50%',
            gap: '30px',
            padding: '30px 10px',
            background: '#f4f4f4',
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
              <Text
                style={{
                  alignSelf: 'start',
                  fontSize: '12px',
                  padding: '10px',
                }}
              >
                <StyledLink to={'/reset-password'}>Forgot password?</StyledLink>
              </Text>
              <DarkButton type="submit">Sign In</DarkButton>
              <Text>
                Do not have an account yet?{' '}
                {user && console.log(user) && user.email}
                <StyledLink to={'/signup'}> Sign Up.</StyledLink>
              </Text>
            </ColumnContainer>
          </form>
        </ColumnContainer>

        <ColumnContainer
          style={{
            width: '50%',
            background: '#0D2329',
          }}
        >
          <img
            src={logo}
            alt="FDB Consulting Logo"
            style={{ maxWidth: 'min(400px, 100%)', height: 'auto' }}
          />
        </ColumnContainer>
      </RowContainer>
    </>
  );
};

export default SignInForm;
