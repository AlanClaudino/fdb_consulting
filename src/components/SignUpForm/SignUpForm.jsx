/* eslint-disable react/prop-types */
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

import logo from '../../assets/Cut-Logo.png';

const SignUpForm = ({
  handleSubmit,
  user,
  emailRef,
  passwordRef,
  confirmpasswordRef,
  error,
}) => {
  return (
    <>
      <RowContainer
        style={{
          flexWrap: 'wrap',
          alignItems: 'stretch',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          borderRadius: '20px',
        }}
      >
        <ColumnContainer
          style={{
            width: '50%',
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
            width: '50%',
            gap: '30px',
            padding: '30px 10px',
            background: '#f4f4f4',
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
    </>
  );
};

export default SignUpForm;
