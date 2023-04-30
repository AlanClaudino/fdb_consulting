import {
  DarkButton,
  ColumnContainer,
  Input,
  RowContainer,
  Text,
  Title,
  StyledLink,
} from '../styled/styled';

import logo from '../assets/Cut-Logo.png';

const Signin = () => {
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
          padding: '10px',
        }}
      >
        <Title>Sign in to Your Account</Title>

        <ColumnContainer style={{ width: '80%' }}>
          <Input type="text" placeholder="E-mail" />
          <Input type="password" placeholder="Password" />
          <DarkButton type="button">Sign In</DarkButton>
          <Text>
            Do not have an account yet?
            <StyledLink to={'/signup'}> Sign Up.</StyledLink>
          </Text>
        </ColumnContainer>
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
          style={{ maxWidth: '80%', height: 'auto' }}
        />
      </ColumnContainer>
    </RowContainer>
  );
};

export default Signin;
