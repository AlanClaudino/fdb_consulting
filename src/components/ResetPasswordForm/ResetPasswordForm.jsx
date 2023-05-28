import {
  DarkButton,
  StyledLink,
  ErrorMessage,
  SuccessMessage,
} from "../styled/styled";

import {
  Input,
  Text,
  RowContainer,
  ColumnContainer,
  Form,
  Title,
  LinkText,
  LinksContainer,
} from "./styled";

import logo from "../../assets/Cut-Logo.png";

// eslint-disable-next-line react/prop-types
const ResetPasswordForm = ({handleSubmit, emailRef, error, sentMessage}) => {
  return (
    <RowContainer>
      <ColumnContainer>
        <Title>Reset your password</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {sentMessage && <SuccessMessage>{sentMessage}</SuccessMessage>}

        <Form onSubmit={handleSubmit}>
          <Text>
            To receive a link to reset your password, please enter your email
            address.
          </Text>
          <Input type="text" placeholder="E-mail" ref={emailRef} required />
          <DarkButton type="submit">Reset Password</DarkButton>
        </Form>
        <LinksContainer>
          <LinkText>
            Go back to Login?
            <StyledLink to={"/signin"}> Click here.</StyledLink>
          </LinkText>
        </LinksContainer>
      </ColumnContainer>

      <ColumnContainer style={{background: "#0D2329"}}>
        <img
          src={logo}
          alt="FDB Consulting Logo"
          style={{maxWidth: "min(400px, 100%)", height: "auto"}}
        />
      </ColumnContainer>
    </RowContainer>
  );
};

export default ResetPasswordForm;
