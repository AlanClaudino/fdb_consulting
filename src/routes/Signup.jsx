import {
  DarkButton,
  ColumnContainer,
  Input,
  RowContainer,
  SubTitle,
  Text,
  Title,
  LightButton,
} from '../styled/styled';

import logo from '../assets/Cut-Logo.png';

const Signup = () => {
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
          background: '#0D2329',
          justifyContent: 'center',
          padding: '10px',
        }}
      >
        <img
          src={logo}
          alt="FDB Consulting Logo"
          style={{ maxWidth: '350px', height: 'auto' }}
        />
        <SubTitle color="#ffffff">Already have an account?</SubTitle>
        <Text color="#ffffff" style={{ padding: ' 0 20px' }}>
          Sign in and keep building a profitable future.
        </Text>
        <LightButton type="button" style={{ width: '50%' }}>
          Sign In
        </LightButton>
      </ColumnContainer>

      <ColumnContainer
        style={{
          flexGrow: '1',
          gap: '30px',
          borderRadius: '20px',
          padding: '10px',
        }}
      >
        <Title>Create a New Account</Title>

        <ColumnContainer style={{ width: '80%' }}>
          <Input type="text" placeholder="E-mail" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm password" />
          <DarkButton type="button">Sign Up</DarkButton>
        </ColumnContainer>
      </ColumnContainer>
    </RowContainer>
  );
};

export default Signup;
