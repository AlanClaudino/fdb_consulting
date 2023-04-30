import {
  DarkButton,
  ColumnContainer,
  Input,
  MainContainer,
  RowContainer,
  SubTitle,
  Text,
  Title,
  LightButton,
} from '../styled/styled';

import logo from '../assets/Logo.png';

const Signin = () => {
  return (
    <MainContainer>
      <RowContainer
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          height: '70svh',
          borderRadius: '20px',
          background: 'rgb(250, 250, 250)',
        }}
      >
        <ColumnContainer
          style={{
            width: '400px',
            height: '70svh',
            gap: '30px',
            borderRadius: '20px',
          }}
        >
          <Title>Login to Your Account</Title>

          <ColumnContainer style={{ width: '80%' }}>
            <Input type="text" placeholder="E-mail" />
            <Input type="password" placeholder="Password" />
            <DarkButton type="button">Sign In</DarkButton>
          </ColumnContainer>
        </ColumnContainer>

        <ColumnContainer
          style={{
            width: '400px',
            height: '70svh',
            background: '#0D2329',
            justifyContent: 'start',
            borderRadius: '20px',
          }}
        >
          <img
            src={logo}
            alt="FDB Consulting Logo"
            style={{ width: '200px', height: 'auto' }}
          />
          <SubTitle color="#ffffff">Need an account?</SubTitle>
          <Text color="#ffffff" style={{ padding: ' 0 20px' }}>
            Sign up and see the outcome on your bottom line.
          </Text>
          <LightButton type="button" style={{ width: '50%' }}>
            Sign Up
          </LightButton>
        </ColumnContainer>
      </RowContainer>
    </MainContainer>
  );
};

export default Signin;
