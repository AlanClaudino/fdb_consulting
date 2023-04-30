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

const Signup = () => {
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
          style={{ maxWidth: '80%', height: 'auto' }}
        />
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
          <Text>
            Already have an account?
            <StyledLink to={'/signin'}> Sign In.</StyledLink>
          </Text>
        </ColumnContainer>
      </ColumnContainer>
    </RowContainer>
  );
};

export default Signup;
