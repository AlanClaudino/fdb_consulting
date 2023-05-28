/* eslint-disable react/prop-types */
import logo from "../../assets/Cut-Logo.png";
import {DarkButton, ErrorMessage, StyledLink} from "../styled/styled";
import {
  ColumnContainer,
  Form,
  Input,
  LinkText,
  LinksContainer,
  RowContainer,
  Title,
} from "./styled";

const SignInForm = ({handleSubmit, emailRef, passwordRef, error}) => {
  return (
    <RowContainer>
      <ColumnContainer>
        <Title>Sign in to Your Account</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="E-mail" ref={emailRef} required />
          <Input
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <DarkButton type="submit">Sign In</DarkButton>
        </Form>

        <LinksContainer>
          <LinkText>
            Forgot password?
            <StyledLink to={"/reset-password"}> Click here.</StyledLink>
          </LinkText>
          <LinkText>
            Do not have an account yet?
            <StyledLink to={"/signup"}> Sign Up.</StyledLink>
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

export default SignInForm;
