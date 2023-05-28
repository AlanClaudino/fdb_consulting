import {Link} from "react-router-dom";
import styled from "styled-components";

export const RowContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.height ? props.height : "auto")};
  background: ${(props) => (props.background ? props.background : "inherit")};
`;

export const ColumnContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${(props) => (props.height ? props.height : "auto")};
  background: ${(props) => (props.background ? props.background : "inherit")};
`;

export const Title = styled("h1")`
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-size: 32px;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

export const SubTitle = styled("h2")`
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-weight: 600;
`;

export const Input = styled("input")`
  color: #0d2329;
  background: none;
  padding: 8px 16px;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  border: none;
  border-bottom: 2px solid #0d2329;
  margin: 10px;
  width: 100%;
  &:focus {
    border-bottom: 2px solid #4dd467;
  }
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: #0d2329;
  }
`;

export const DarkButton = styled("button")`
  background-color: #0d2329;
  color: #fff;
  width: 70%;
  border-radius: 24px;
  font-size: 16px;
  padding: 8px;
  border: none;
  &:hover {
    background-color: #4dd467;
    cursor: pointer;
  }
`;

export const LightButton = styled("button")`
  background-color: #fff;
  color: #0d2329;
  width: 70%;
  border-radius: 24px;
  font-size: 16px;
  padding: 8px;
  border: none;
  margin: 10px;
  &:hover {
    color: #fff;
    background-color: #4dd467;
    cursor: pointer;
  }
`;

export const Text = styled("p")`
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-size: 16px;
  font-family: "Lato", sans-serif;
  text-align: justify;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : "#4dd467")};
  &:hover {
    color: #0d2329;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled("p")`
  font-size: 16px;
  font-family: "Lato", sans-serif;
  padding: 10px;
  border-left: 10px solid #ff3333;
  background-color: rgb(250, 250, 250);
  color: #0d2329;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const SuccessMessage = styled("p")`
  font-size: 16px;
  font-family: "Lato", sans-serif;
  padding: 10px;
  border-left: 10px solid #4bb543;
  background-color: rgb(250, 250, 250);
  color: #0d2329;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;
