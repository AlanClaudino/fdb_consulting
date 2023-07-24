import styled from "styled-components";

export const AddEquipContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 21px;
  padding-bottom: 10px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const AddButton = styled.button`
  border: none;
  background-color: inherit;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
    color: #4dd467;
  }
`;

export const Text = styled("p")`
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-size: ${(props) => (props.size ? props.size : "16px")};
  font-family: "Lato", sans-serif;
  text-align: justify;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  flex-wrap: wrap;
`;

export const FormSection = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Label = styled("label")`
  color: #0d2329;
  font-size: 15px;
  font-family: "Lato", sans-serif;
  padding: 5px;
  font-weight: bolder;
`;

export const Input = styled("input")`
  color: #0d2329;
  font-size: 15px;
  padding: 5px 10px;
  font-family: "Lato", sans-serif;
  border: 2px solid rgba(13, 35, 41, 0.3);
  border-radius: 5px;
  width: ${(props) => (props.width ? props.width : "250px")};
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
