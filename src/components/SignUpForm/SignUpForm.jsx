/* eslint-disable react/prop-types */
import {DarkButton, StyledLink, ErrorMessage} from "../styled/styled";

import {
  ColumnContainer,
  Title,
  Form,
  LinkText,
  LinksContainer,
  RowContainer,
  Input,
} from "./styled";

import logo from "../../assets/Cut-Logo.png";

const SignUpForm = ({
  handleSubmit,
  emailRef,
  passwordRef,
  confirmpasswordRef,
  error,
}) => {
  return (
    <>
      <RowContainer>
        <ColumnContainer style={{background: "#0D2329"}}>
          <img
            src={logo}
            alt="FDB Consulting Logo"
            style={{maxWidth: "min(400px, 100%)", height: "auto"}}
          />
        </ColumnContainer>

        <ColumnContainer>
          <Title>Create a New Account</Title>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Form onSubmit={handleSubmit}>
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
          </Form>
          <LinksContainer>
            <LinkText>
              Already have an account?
              <StyledLink to={"/signin"}> Sign In.</StyledLink>
            </LinkText>
          </LinksContainer>
        </ColumnContainer>
      </RowContainer>
    </>
  );
};

export default SignUpForm;
