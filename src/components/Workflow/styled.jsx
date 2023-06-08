import styled from "styled-components";

export const WorflowContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const DarkButton = styled("button")`
  background-color: #0d2329;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  padding: 12px;
  border: none;
  &:hover {
    background-color: #4dd467;
    cursor: pointer;
  }
`;

export const TableContainer = styled.section`
  border-radius: 5px;
  border: 1px solid #0d2329;
`;

export const TableTitle = styled.section`
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #0d2329;
  color: #f4f4f4;
  font-weight: bolder;
`;

export const TableData = styled("section")`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-top: 1px solid #0d2329;
`;

export const InnerSection = styled.div`
  flex: 1 1 0px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  border: none;
  &:hover {
    cursor: pointer;
    color: #00cc66;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fafafa;
  border: none;
  &:hover {
    cursor: pointer;
    color: #db3a34;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(13, 45, 51, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
  background-color: #fafafa;
  max-width: 500px;
  padding: 20px;
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
