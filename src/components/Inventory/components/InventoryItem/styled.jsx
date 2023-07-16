import styled from "styled-components";

export const EquipContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 9fr 1fr;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid rgba(13, 35, 41, 0.3);
`;
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CategoryText = styled.h3`
  color: #0d2329;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  text-align: start;
  font-weight: 600;
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 2fr;
  align-items: center;
`;

export const TextContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 2fr;
  align-items: center;
`;

export const FormSection = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Label = styled("label")`
  color: #0d2329;
  font-size: 16px;
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
  min-width: 70px;
  max-width: 250px;
  width: 70%;
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

export const Text = styled("p")`
  color: ${(props) => (props.color ? props.color : "inherit")};
  font-size: 16px;
  font-family: "Lato", sans-serif;
  text-align: justify;
`;
