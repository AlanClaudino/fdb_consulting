import styled from "styled-components";
import background from "../../assets/farmBackground.svg";

export const Background = styled("div")`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${background}) center;
  background-size: cover;
`;

export const Container = styled("div")`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
  margin: 30px auto;
  background-color: #fff;
  max-width: 980px;
  padding: 5px;
`;

export const Title = styled("h1")`
  margin: 15px;
  color: #0d2329;
  font-size: 32px;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Label = styled("label")`
  color: #0d2329;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  margin-right: 5px;
  padding: 5px;
  display: block;
  font-weight: bolder;
`;

export const Input = styled("input")`
  color: #0d2329;
  font-size: 16px;
  padding: 5px;
  font-family: "Lato", sans-serif;
  border: 2px solid rgba(13, 35, 41, 0.3);
  border-radius: 5px;
  width: 100%;
  &:focus {
    border: 2px solid #4dd467;
  }
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: rgba(13, 35, 41, 0.75);
  }
`;

export const FormSection = styled("section")`
  width: 80%;
  padding: 5px 30px 15px 30px;
  text-align: start;
  background-color: #f4f4f4;
`;

export const SaveButton = styled("button")`
  background-color: #01ae57;
  color: white;
  font-weight: bolder;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  margin: 10px;
  &:hover {
    background-color: #00cc66;
    cursor: pointer;
  }
`;

export const ClearButton = styled("button")`
  background-color: #d12b25;
  color: white;
  font-weight: bolder;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  margin: 10px;
  &:hover {
    background-color: #db3a34;
    cursor: pointer;
  }
`;
