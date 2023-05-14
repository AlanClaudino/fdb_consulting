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
} from '../../styled/styled';

import logo from '../../assets/Cut-Logo.png';

// eslint-disable-next-line react/prop-types
const ResetPasswordForm = ({ handleSubmit, emailRef, error, sentMessage }) => {
  return (
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
    </RowContainer>
  );
};

export default ResetPasswordForm;
