import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const FormSection = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Label = styled("label")`
  color: #0d2329;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  padding: 5px;
  width: 100%;
  font-weight: bolder;
`;

export const Input = styled("input")`
  color: #0d2329;
  min-width: 300px;
  font-size: 16px;
  padding: 5px 8px;
  font-family: "Lato", sans-serif;
  border: 2px solid rgba(13, 35, 41, 0.3);
  border-radius: 5px;
  width: 100%;
  &:focus {
    /* border: 2px solid #4dd467; */
    border: 2px solid rgba(13, 35, 41, 0.7);
  }
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: rgba(13, 35, 41, 0.75);
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: rgb(15, 54, 60);
  min-width: 90px;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  padding: 7px 10px;
  border: none;
  &:hover {
    background-color: rgb(30, 69, 80);
    cursor: pointer;
  }
`;

export const ClearButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: #d12b25;
  min-width: 90px;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  padding: 7px 10px;
  border: none;
  &:hover {
    background-color: #db3a34;
    cursor: pointer;
  }
`;
