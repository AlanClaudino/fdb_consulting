import styled from "styled-components";

export const RowContainer = styled("div")`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
  justify-content: center;
`;

export const ColumnContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  justify-content: center;
  background-color: #f4f4f4;
  width: 50%;
`;

export const LinksContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  width: 80%;
  background-color: #f4f4f4;
`;

export const Title = styled("h1")`
  font-size: 32px;
  font-family: "Poppins", sans-serif;
  color: #0d2329;
  text-align: center;
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const Input = styled("input")`
  color: #0d2329;
  background: none;
  padding: 8px 16px;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  border: none;
  border-bottom: 2px solid #0d2329;
  width: 80%;
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

export const LinkText = styled("p")`
  font-size: 12px;
  font-family: "Lato", sans-serif;
  text-align: start;
  width: 80%;
`;
